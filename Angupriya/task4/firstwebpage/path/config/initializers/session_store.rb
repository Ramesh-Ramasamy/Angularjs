# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_path_session',
  :secret      => '659ae533d0e69d70ae8105af4b029a1a7ebe0b0f14a7bd67c40180debc8928cb194325c177a823841c68bf9c65d83ad7facc80577cc12b012784b5a2f22c279d'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
