class DetailsController < ApplicationController

skip_before_filter :verify_authenticity_token
  def index
    @details=Detail.all
    # raise @details.inspect
    respond_to do |format|
      format.json { render :json=> @details }
    end
   end

  def new
    @detail = Detail.new
    respond_to do |format|      
      format.json  { render :json => @detail }
    end
  end

  def create
    @detail = Detail.new(params[:detail])
    respond_to do |format|
      if @detail.save
          format.json {render :json => @detail}
      end
    end
  end

  def show
  @showpost=Detail.find(params[:id])
  respond_to do |format|
      format.json { render :json=> @showpost }
    end
  end

  def update
    @detail = Detail.find(params[:id])
    respond_to do |format|
      if @detail.update_attributes(params[:detail])           
          format.json  { render :json => @detail }      
      end
    end
  end
  
   def destroy
    @detail = Detail.find(params[:id])
    @detail.destroy

    respond_to do |format|
      format.json       
    end
  end
end
