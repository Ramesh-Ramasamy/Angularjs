class CreateCountryTypes < ActiveRecord::Migration
  def self.up
    create_table :country_types do |t|
      t.refrences :country
      t.string :type

      t.timestamps
    end
  end

  def self.down
    drop_table :country_types
  end
end
