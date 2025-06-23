use serde::{Deserialize, Serialize};
use axum::{
    routing::{get, post},
    Json, Router,
    http::StatusCode,
};
use tower_http::cors::{CorsLayer, Any};



#[derive(Deserialize, Debug)]
struct ContactForm {
    name: String,
    email: String,
    subject: String,
    message: String,
}

#[derive(Debug, Serialize)]
struct Event {
    title: String,
    category: String,
    date: String,
    time: String,
    location: String,
    description: String,
    image: String,
}

#[tokio::main]
async fn main() {

    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods(Any) 
        .allow_headers(Any); 


    let app = Router::new()
        // `GET /` goes to `root`
        .route("/", get(root))
        // `GET /events` goes to `get_events_handler`
        .route("/api/events", get(get_events_handler))
        // `POST /contact` goes to `contact_form_handler`
        .route("/api/contact", post(contact_form_handler))
        .layer(cors);

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

// Vercel Handler
pub async fn vercel_handler() -> Router {
    Router::new()
        .route("/", get(root))
        .route("/api/events", get(get_events_handler))
        .route("/api/contact", post(contact_form_handler))
}


// --- Route Handlers ---

// basic handler that responds with a static string
async fn root() -> &'static str {
    "Hello, World!"
}

async fn get_events_handler() -> Json<Vec<Event>> {
    
    let events = vec![
        Event {
            title: "Welcome Week Campus Tour".to_string(),
            category: "Social".to_string(),
            date: "September 5, 2024".to_string(),
            time: "2:00 PM - 4:00 PM".to_string(),
            location: "Meet at Student Union Entrance".to_string(),
            description: "New to campus? Join us for a comprehensive tour where we show you all the essential spots!".to_string(),
            image: "/mines-tour.jpg".to_string(),
        },
        Event {
            title: "Visa Renewal Workshop".to_string(),
            category: "Admin Support".to_string(),
            date: "September 12, 2024".to_string(),
            time: "5:00 PM - 6:30 PM".to_string(),
            location: "Room 301, Admin Building".to_string(),
            description: "Get expert guidance on the visa renewal process. We will cover all the required documents and answer questions.".to_string(),
            image: "/visa-workshop.webp".to_string(),
        },
        Event {
            title: "International Food Festival".to_string(),
            category: "Cultural".to_string(),
            date: "September 20, 2024".to_string(),
            time: "6:00 PM onwards".to_string(),
            location: "Main University Lawn".to_string(),
            description: "Share a dish from your home country and taste flavors from around the world!".to_string(),
            image: "/ian-dumplings.jpg".to_string(),
        },
    ];
    Json(events)
}

async fn contact_form_handler(
    Json(payload): Json<ContactForm>,
) -> StatusCode {

    // Supposed to log on an actual backend database
    println!("->> CONTACT FORM RECEIVED:");
    println!("  ->> Name: {}", payload.name);
    println!("  ->> Email: {}", payload.email);
    println!("  ->> Subject: {}", payload.subject);
    println!("  ->> Message: {}", payload.message);

    StatusCode::OK
}