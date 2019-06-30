/**
 * Check if required environment variables are set on server startup
 * @param {string[]} requiredEnvVars Environment variables that are required
 * @param {string[]} maskedEnvVars Sensitive environment variables that should not have their values logged
 * @param {function=} infoLog Function used for logging success messages
 * @param {function=} errorLog Function used for logging error messages
 */
const checkEnvVars = (
  requiredEnvVars,
  maskedEnvVars,
  infoLog = console.log,
  errorLog = console.error
) => {
  const missingEnvVars = requiredEnvVars.filter(
    envVar => !Object.prototype.hasOwnProperty.call(process.env, envVar)
  );

  if (missingEnvVars.length > 0) {
    missingEnvVars.forEach(envVar =>
      errorLog('Required environment variable missing:', envVar)
    );
    errorLog('Server could not be started because of error');
    process.exit(1);
  }

  infoLog('Environment Variables...');
  requiredEnvVars.forEach(envVar => {
    infoLog(
      `${envVar}:`,
      maskedEnvVars.includes(envVar) ? 'XXXXXXXXXXXXXXX' : process.env[envVar]
    );
  });
};

module.exports = checkEnvVars;
