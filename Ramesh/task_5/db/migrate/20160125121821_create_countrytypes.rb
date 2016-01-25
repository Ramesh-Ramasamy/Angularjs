class CreateCountrytypes < ActiveRecord::Migration
  def self.up
    create_table :countrytypes do |t|
      t.references :country
      t.string :type

      t.timestamps
    end
  end

  def self.down
    drop_table :countrytypes
  end
end
