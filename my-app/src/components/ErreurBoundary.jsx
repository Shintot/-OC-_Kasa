import React from "react";
import { Link } from "react-router-dom";
import "../style/errorBoundary.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
   
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Vous pouvez personnaliser le message d'erreur ici.
      return (
        <>
          <h1 className="error404">404</h1>
          <p className="errorOups">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link to={"/"}  className="errorLink">Retourner sur la page d'accueil</Link>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
