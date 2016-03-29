class ApipostsController < ApplicationController
  def index
    @counters = Counter.find(:all,:select => 'id,name,content,type,count')
    respond_to do |format|
      format.json { render :json=> @counters }
    end
  end

 def show
  @showpost=Counter.find(params[:id])
  respond_to do |format|
      format.json { render :json=> @showpost }
    end
  end
  # def new
  #   @newpost = Counter.new
  #   respond_to do |format|      
  #     format.json  { render :json => @newpost }
  #   end
  # end

  def create
    @createpost = Counter.new
    @createpost.name = params[:name]
    @createpost.content = params[:content]
    saved = @createpost.save!
    if saved
    respond_to do |format|
          format.json {render :json => @createpost}
      end
    end
  end


  def update
    @detail = Counter.find(params[:id])
      if @detail.update_attributes(:count=>params[:count])           
        respond_to do |format|
          format.json  { render :json => @detail }      
         end
      end
  end 

end
