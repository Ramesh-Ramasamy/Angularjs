class RemoveUnusefulFieldsFromCounters < ActiveRecord::Migration
  def self.up
    remove_column :counters, :created_at
    remove_column :counters, :updated_at
  end

  def self.down
    add_column :counters, :updated_at, :datetime
    add_column :counters, :created_at, :datetime
  end
end
