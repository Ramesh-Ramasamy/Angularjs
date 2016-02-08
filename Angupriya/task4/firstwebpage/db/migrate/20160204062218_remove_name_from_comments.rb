class RemoveNameFromComments < ActiveRecord::Migration
  def self.up
    remove_column :comments, :name
  end

  def self.down
    add_column :comments, :name, :String
  end
end
