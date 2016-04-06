class DetailsController < ApplicationController
  # GET /details
  # GET /details.xml
  skip_before_filter :verify_authenticity_token

  def index
    @details = Detail.all
    respond_to do |format|      
      format.json  { render :json => @details }
    end
  end

  # GET /details/1
  # GET /details/1.xml
  def show
    @detail = Detail.find(params[:id])

    respond_to do |format|      
      format.json  { render :json => @detail }
    end
  end

  # GET /details/new
  # GET /details/new.xml
  def new
    @detail = Detail.new

    respond_to do |format|      
      format.json  { render :json => @detail }
    end
  end

  # GET /details/1/edit
  def edit
    @detail = Detail.find(params[:id])
    respond_to do |format|      
      format.json  { render :json => @detail }
    end
  end

  # POST /details
  # POST /details.xml
  def create
    @detail = Detail.new(params[:detail])    
    respond_to do |format|
      if @detail.save
        format.json  { render :json => @detail }
      end
    end
  end

  # PUT /details/1
  # PUT /details/1.xml
  def update
    @detail = Detail.find(params[:id])

    respond_to do |format|
      if @detail.update_attributes(params[:detail])
                  
          format.json  { render :json => @detail }      
      end
    end
  end

  # DELETE /details/1
  # DELETE /details/1.xml
  def destroy
    @detail = Detail.find(params[:id])
    @detail.destroy
    respond_to do |format|      
      format.json  { render :json => @detail }
    end
  end
end
