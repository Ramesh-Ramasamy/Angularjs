class AddTypeToCounters < ActiveRecord::Migration
  def self.up
    add_column :counters, :type, :string
  end

  def self.down
    remove_column :counters, :type
  end
end
