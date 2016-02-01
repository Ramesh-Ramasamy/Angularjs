class CreateComments < ActiveRecord::Migration
  def self.up
    create_table :comments do |t|
      t.string :name
      t.string :commentbody
      t.integer :country_id
      t.string :country_type

      t.timestamps
    end
  end

  def self.down
    drop_table :comments
  end
end
