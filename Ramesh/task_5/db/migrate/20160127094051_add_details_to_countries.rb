class AddDetailsToCountries < ActiveRecord::Migration
  def self.up
    add_column :countries, :continent, :string :default => nil
    add_column :countries, :type, :string
  end

  def self.down
    remove_column :countries, :type
    remove_column :countries, :continent
  end
end
