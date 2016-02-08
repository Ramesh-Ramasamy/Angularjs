class AddIndexToComments < ActiveRecord::Migration
  def self.up
    add_index :comments, :counter_id
  end

  def self.down
    remove_index :comments, :counter_id
  end
end
