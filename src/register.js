const register = (swUrl, config) => {
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('pokedex-serviceworker.js').then(function(registration) {
            // successfull registration
            console.log("hoera, registered with scope," + registration.scope);
        }).catch(function(data) {
            // failed registration
            console.log("too bad.... registered failed");
        });
    }
}

export default register;