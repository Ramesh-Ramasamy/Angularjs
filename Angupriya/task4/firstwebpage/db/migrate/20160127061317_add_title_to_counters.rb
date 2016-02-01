class AddTitleToCounters < ActiveRecord::Migration
  def self.up
    add_column :counters, :title, :string
  end

  def self.down
    remove_column :counters, :title
  end
end
