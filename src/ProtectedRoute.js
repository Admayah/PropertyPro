function ProtectedRoute({ children }) {

    if (!localStorage.getItem('token')) {

        window.location = '/'
    }
    return children;

}

export default ProtectedRoute;