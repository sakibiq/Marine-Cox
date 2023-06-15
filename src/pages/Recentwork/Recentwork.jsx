import React, { useState } from 'react';
import recent1 from '../../assets/recent1.jpg';
import recent2 from '../../assets/recent2.jpg';
import recent3 from '../../assets/recent3.jpg';
import recent4 from '../../assets/recent4.jpg';
import recent5 from '../../assets/recent5.jpg';
import recent6 from '../../assets/recent6.jpg';
import recent7 from '../../assets/recent7.jpg';
import recent8 from '../../assets/recent8.jpg';

const Recentwork = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className='mt-10'>
      <h1 className='text-4xl text-center mb-6 underline'>Recent Works</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 '>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={recent1}
            alt=''
            onClick={() => openModal(recent1)}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={recent2}
            alt=''
            onClick={() => openModal(recent2)}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={recent3}
            alt=''
            onClick={() => openModal(recent3)}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={recent4}
            alt=''
            onClick={() => openModal(recent4)}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={recent5}
            alt=''
            onClick={() => openModal(recent5)}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={recent6}
            alt=''
            onClick={() => openModal(recent6)}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={recent7}
            alt=''
            onClick={() => openModal(recent7)}
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg cursor-pointer'
            src={recent8}
            alt=''
            onClick={() => openModal(recent8)}
          />
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='max-w-3xl relative'>
            <img
              className='h-auto max-w-full rounded-lg'
              src={modalImage}
              alt=''
            />
            <button
              className='absolute top-10 right-2 p-4 rounded-full bg-black text-white'
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recentwork;
