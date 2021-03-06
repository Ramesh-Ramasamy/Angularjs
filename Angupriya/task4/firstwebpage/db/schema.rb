# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20160304121901) do

  create_table "comments", :force => true do |t|
    t.string   "feedback"
    t.integer  "counter_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
  end

  add_index "comments", ["counter_id"], :name => "index_comments_on_counter_id"

  create_table "counters", :force => true do |t|
    t.string  "name"
    t.string  "content"
    t.integer "count",   :limit => 10, :precision => 10, :scale => 0, :default => 0
    t.string  "type"
    t.string  "title"
  end

  create_table "details", :force => true do |t|
    t.string "name"
  end

  create_table "people", :force => true do |t|
    t.string "name"
  end

  create_table "persons", :force => true do |t|
    t.string "name"
  end

  create_table "sessions", :force => true do |t|
    t.string   "session_id", :null => false
    t.text     "data"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "sessions", ["session_id"], :name => "index_sessions_on_session_id"
  add_index "sessions", ["updated_at"], :name => "index_sessions_on_updated_at"

  create_table "users", :force => true do |t|
    t.string   "name"
    t.string   "password"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
