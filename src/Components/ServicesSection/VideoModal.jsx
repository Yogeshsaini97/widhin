const VideoModal = ({ video, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl"
      >
        ×
      </button>

      <video
        src={video}
        controls
        autoPlay
        className="max-w-4xl w-full rounded-xl"
      />
    </div>
  );
};

export default VideoModal;
