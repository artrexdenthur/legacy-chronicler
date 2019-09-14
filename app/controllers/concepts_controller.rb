class ConceptsController < ApplicationController
  def index
    @concepts = Concept.all
    render json: @concepts, only: [:id, :noun_id, :adjective_id  ], methods: :name
  end
end
