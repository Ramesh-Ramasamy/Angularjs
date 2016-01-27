class CountersController < ApplicationController

  def index
    @counters = Counter.all
  end

  def show
   @counter = Counter.find(params[:id])
   @counter.count_value
   @total = Counter.all
   @tc=Counter.total_value
    render :layout => false 
 end

 def new
   @counter = Counter.new
   render :layout => false
 end

 def create
  @counter = Counter.new(params[:counter])
  if @counter.save
    redirect_to(counters_path) 
  else
    render :action => "new" 
  end
end
end
