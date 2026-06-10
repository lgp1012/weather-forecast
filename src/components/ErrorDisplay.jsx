import errorImage from "../assets/images/404-error.png";

export default function ErrorDisplay({ message }) {
    return (
        <div className="location-message-panel">
            <div className="status-content">
                <img src={errorImage} alt="Error" className="status-image" />
                <p className="status-message">{message}</p>
            </div>
        </div>
    );
}