class LinkWithoutTitlesController < ApplicationController
  def new
    @link = LinkWithoutTitle.new
    render :layout => false
   end

  def create
  @link = LinkWithoutTitle.new(params[:link_without_title])
  if @link.save
    redirect_to :root
  else
    render :action => "new" 
  end
  end
  def show
   @counter = Counter.find(params[:id])
   @counter.count_value
   @tc=Counter.total_value
    render :layout => false 
  end
end
