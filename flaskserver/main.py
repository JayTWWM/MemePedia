from flask import (
    Flask,
    redirect,
    url_for,
    request,
    render_template,
    Response,
    jsonify,
    redirect,
)
from flask_cors import CORS, cross_origin
from PIL import Image
import numpy as np
from io import BytesIO
from model import VGG19Embeddings
from http.client import IM_USED
import os
from google.cloud import vision
import io


os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.join(
    os.getcwd(), "gcloudKey.json"
)
app = Flask(__name__)
model = VGG19Embeddings((256, 256, 3))
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"
client = vision.ImageAnnotatorClient()


def model_predict(img, model):
    """
    Prediction Function for model.
    Arguments:
        img: is address to image
        model : image classification model
    """
    img = img.resize((256, 256))

    # Preprocessing the image
    x = np.array(img)
    x = np.expand_dims(x, axis=0)

    preds = model.get_embeddings(x)
    return preds


def detect_safe_search(image):
    """Detects unsafe features in the file."""
    image = vision.Image(content=image)

    response = client.safe_search_detection(image=image)
    safe = response.safe_search_annotation

    # Names of likelihood from google.cloud.vision.enums
    likelihood_name = (
        "UNKNOWN",
        "VERY_UNLIKELY",
        "UNLIKELY",
        "POSSIBLE",
        "LIKELY",
        "VERY_LIKELY",
    )
    print("Safe search:")

    print("adult: {}".format(likelihood_name[safe.adult]))
    print("violence: {}".format(likelihood_name[safe.violence]))
    print("racy: {}".format(likelihood_name[safe.racy]))

    if response.error.message:
        raise Exception(
            "{}\nFor more info on error messages, check: "
            "https://cloud.google.com/apis/design/errors".format(response.error.message)
        )

    return (
        likelihood_name[safe.adult],
        likelihood_name[safe.violence],
        likelihood_name[safe.racy],
    )


@app.route("/embeddings", methods=["POST"])
@cross_origin()
def embeddings():
    """
    get the embedding array of given image
    """
    if request.method == "POST":
        # Get the image from post request

        buffered = BytesIO()
        # print(request)
        # print(request.files)
        image = request.files["image"]
        img = Image.open(image)
        img = img.convert("RGB")
        img.save(buffered, format="JPEG")
        adult, violence, racy = detect_safe_search(buffered.getvalue())

        # Make prediction
        embds = model_predict(img, model)

        # convert numpy array to list
        embds = embds.ravel().tolist()
        # Serialize the result, you can add additional fields
        return jsonify(embeddings=embds, adult=adult, violence=violence, racy=racy)


if __name__ == "__main__":
    app.run()
