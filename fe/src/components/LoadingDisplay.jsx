import loadingVideo from "../assets/images/loading.mp4";

export default function LoadingDisplay({ message }) {
    return (
        <div className="location-message-panel">
            <div className="status-content">
                <video
                    className="status-media status-media--loading"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label="Loading animation"
                >
                    <source src={loadingVideo} type="video/mp4" />
                </video>
                <p className="status-message">{message}</p>
            </div>
        </div>
    );
}