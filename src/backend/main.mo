import Int "mo:core/Int";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Feedback = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  module Feedback {
    public func compare(feedback1 : Feedback, feedback2 : Feedback) : Order.Order {
      Int.compare(feedback1.timestamp, feedback2.timestamp);
    };
  };

  type Movie = {
    title : Text;
    phase : Nat;
    releaseYear : Nat;
    synopsis : Text;
    cast : [Text];
    officialMarvelLink : Text;
  };

  let feedbacks = Map.empty<Text, Feedback>();
  let movies = Map.empty<Text, Movie>();

  public shared ({ caller }) func submitFeedback(name : Text, email : Text, message : Text) : async () {
    let timestamp = Time.now();
    let feedback : Feedback = {
      name;
      email;
      message;
      timestamp;
    };
    feedbacks.add(timestamp.toText(), feedback);
  };

  public query ({ caller }) func getAllFeedback() : async [Feedback] {
    feedbacks.values().toArray().sort();
  };

  public shared ({ caller }) func addMovie(id : Text, movie : Movie) : async () {
    if (movies.containsKey(id)) {
      Runtime.trap("Movie already exists");
    };
    movies.add(id, movie);
  };

  public query ({ caller }) func getAllMovies() : async [Movie] {
    movies.values().toArray();
  };

  public query ({ caller }) func getMovie(id : Text) : async Movie {
    switch (movies.get(id)) {
      case (null) { Runtime.trap("Movie not found") };
      case (?movie) { movie };
    };
  };
};
