class Counter < ActiveRecord::Base
	has_many :comments
	validates_presence_of :name,  :content
	validates_uniqueness_of :name
	
  def count_value
		 self.update_attributes(:count => self.count+1)
	end
	
  def self.total_value
	 	self.sum(:count)
  end

  def with_title
    if self.type.present? 
       if (self.type).eql?('LinkWithTitle')
       self.name
       end 
    end 
  end 

  def without_title
    if self.type.present? 
       if (self.type).eql?('LinkWithoutTitle')
       self.name
       end 
    end 
  end 
  
  end
