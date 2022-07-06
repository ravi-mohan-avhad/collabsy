const appSettings = {
    appCredentials: {
        clientId: "d4f933f1-f440-4a40-942d-6f14c55d4984",
        tenantId: "a9bf8cdf-251c-4b12-8c53-ab1178e23793",
        clientSecret: "koI8Q~ZKD.zXm7L5Yx30J356e5dJcFWYehdlQaFr"
    },
    authRoutes: {
        redirect: "/redirect",
        error: "/error", // the wrapper will redirect to this route in case of any error.
        unauthorized: "/unauthorized" // the wrapper will redirect to this route in case of unauthorized access attempt.
    }
}

module.exports = appSettings;