import tensorflow as tf
import numpy as np


def getModel():
    input_layer = tf.keras.layers.Input(shape=(256, 256, 3))
    vgg19 = tf.keras.applications.vgg19.VGG19(
        include_top=False, input_shape=(256, 256, 3)
    )
    x = vgg19(input_layer)
    x = tf.keras.layers.GlobalAveragePooling2D()(x)
    # x = tf.keras.layers.Flatten()(x)

    return tf.keras.Model(inputs=input_layer, outputs=x)


class VGG19Embeddings:
    def __init__(self, input_shape):
        self.model = getModel()

    def get_embeddings(self, image: np.ndarray):
        """
        image - numpy array of shape (None, 256, 256, 3)
        """
        img_processed = tf.keras.applications.vgg19.preprocess_input(image)
        return self.model(img_processed).numpy()
