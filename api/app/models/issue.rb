class Issue < ApplicationRecord
  validates :title, presence: true, uniqueness: true
end
