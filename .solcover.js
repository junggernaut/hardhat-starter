module.exports = {
    istanbulReporter: ["html", "lcov", "text"],
    providerOptions: {
        mnemonic: process.env.MNEMONIC,
    },
    skipFiles: ["test"],
};
