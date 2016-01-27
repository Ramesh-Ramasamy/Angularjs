class CreateCounters < ActiveRecord::Migration
  def self.up
    create_table :counters do |t|
      t.string :name
      t.string :content
      t.decimal :count

      t.timestamps
    end
  end

  def self.down
    drop_table :counters
  end
end
