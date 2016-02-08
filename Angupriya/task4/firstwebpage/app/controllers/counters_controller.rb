class CountersController < ApplicationController

  def index
    @counters = Counter.find(:all ,:select => 'id,name,content,type')
      end

  def new
    render :layout => false
   end

   
end
