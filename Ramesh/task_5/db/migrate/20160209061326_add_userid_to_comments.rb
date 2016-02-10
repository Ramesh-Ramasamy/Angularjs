class AddUseridToComments < ActiveRecord::Migration
  def self.up
    add_column :comments, :user_id, :int
  end

  def self.down
    remove_column :comments, :user_id
  end
end
