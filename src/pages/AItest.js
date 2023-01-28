import * as tf from '@tensorflow/tfjs';
import { useEffect, useState, useRef } from 'react';




const Aitest = () => {
  const [image, setImage] = useState(null);
  const modelRef = useRef(null);
  

  useEffect(() => {
    async function loadModel() {
    
    // Load your pre-trained model
    // modelRef.current = await tf.loadLayersModel('../Asset/EIPCAECGIMGCLASS.json');
    }
    loadModel();
  }, []);

  const handleFileChange = async (event) => {
    
    const file = event.target.files[0];
    setImage(file);
  }

  const predict = async () => {
    const model = await tf.loadLayersModel('../Asset/EIPCAECGIMGCLASS.h5');
    await model.save('../Asset/EIPCAMODEL.json');
    if (!image) {
      return;
    }
    // Pre-processing image to match the model input shape
    const imageUrl = URL.createObjectURL(image);
    const preprocessedImage = tf.browser.fromPixels(imageUrl);
    const resizedImage = tf.image.resizeBilinear(preprocessedImage, [224, 224]);
    const normalizedImage = tf.div(tf.sub(resizedImage, tf.scalar(127.5)), tf.scalar(127.5));
    // Pass the image to the model and get the prediction
    const prediction = modelRef.current.predict(normalizedImage);
    console.log(prediction);
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={predict}>Predict</button>
    </div>
  );
}

export default Aitest;