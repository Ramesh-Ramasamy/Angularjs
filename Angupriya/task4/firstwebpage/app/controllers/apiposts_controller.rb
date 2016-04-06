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
  
  def with_title
  @list=LinkWithTitle.all
    respond_to do |format|
      format.json { render :json=> @list }
    end
  end

  def without_title
  @list=LinkWithoutTitle.all
    respond_to do |format|
      format.json { render :json=> @list }
    end
  end

  def create
    @createpost = Counter.new
    if params[:type].eql?("LinkWithTitle")
      @createpost.title=params[:title]
    else
      @createpost.title="No Title"
    end
    @createpost.name = params[:name]
    @createpost.content = params[:content]
    @createpost.type=params[:type]
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
