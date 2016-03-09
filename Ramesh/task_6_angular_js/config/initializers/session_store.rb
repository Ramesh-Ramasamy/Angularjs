# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_task_6_angular_js_session',
  :secret      => '879dba6ef0dbb1776ae6cf2a480ccb61ea987583f71fb2a9487785dd0dec9a18ed008453f6bc2a85147ee1bdd65537e70de1761f11446745a904ba187b37efeb'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
