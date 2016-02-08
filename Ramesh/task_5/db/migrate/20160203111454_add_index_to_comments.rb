class AddIndexToComments < ActiveRecord::Migration
  def self.up
    add_index :comments, :country_id
  end

  def self.down
    remove_index :comments, :country_id
  end
end
