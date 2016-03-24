class ApipostsController < ApplicationController
  def index
    @counters = Counter.find(:all ,:select => 'id,name,content,type')
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
    raise params
    @createpost.name = params[:name]
    @createpost.content = params[:content]
    saved = @createpost.save!
    if saved
    respond_to do |format|
          format.json {render :json => @createpost}
      end
    end
  end
end
