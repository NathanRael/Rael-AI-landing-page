import {ChatPageImage, ExploreModelImage, ImageDescriptionImage, PredefinedChatbotImage} from "@/assets";

export interface Feature {
    id : number;
    title : string;
    description : string;
    image : string;
    icon : 'bot' | 'image' | 'model' | 'chat'
}

export const FEATURES : Feature[]   = [
    {
        id : 0,
        title: "Seamlessly Chat with Your Favorite AI Models",
        description: "Discover the joy of connecting with your favorite AI models. Instantly download and interact with models available on the Ollama website, all within the app.",
        image: ChatPageImage,
        icon : 'chat'
    },
    {
        id : 1,
        title: "Visualize and Explore Images Intelligently",
        description: "Unleash the power of AI to describe and analyze images. Transform your app experience with intelligent image understanding and exploration.",
        image: ImageDescriptionImage,
        icon : 'image'
    },
    {
         id : 2,
        title: "Access and Download Every Model Effortlessly",
        description: "Get instant access to a vast library of AI models from Ollama. Download and utilize them with ease directly through the app.",
        image: ExploreModelImage,
        icon : 'model'
    },
    {
        id : 3,
        title: "Engage with Predefined AI Chatbots Instantly",
        description: "Jumpstart your conversations with ready-to-use AI chatbots tailored for various purposes. Simplify your experience with preloaded chatbot types in the app.",
        image: PredefinedChatbotImage,
        icon : 'bot'
    }
]
