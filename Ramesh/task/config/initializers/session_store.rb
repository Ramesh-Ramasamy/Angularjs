# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_task_session',
  :secret      => '887b658943c6630267ea2cc8c500d77781383c1aa56fa5e397c95f0d47238e609c4f023be0072e71aca4c6d36697c4d2e828f0a4635e3bd810ab938d7a874829'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
