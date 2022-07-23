// Package model contains generated code for schema 'Attractech'.
package model

// Code generated by xo. DO NOT EDIT.

import (
	"context"
	"database/sql"
	"time"
)

// Activity represents a row from 'Attractech.activity'.
type Activity struct {
	ID              uint64       `json:"id"`               // id
	UpdatedAt       time.Time    `json:"updated_at"`       // updated_at
	CreatedAt       time.Time    `json:"created_at"`       // created_at
	CorporationID   uint64       `json:"corporation_id"`   // corporation_id
	CorporationName string       `json:"corporation_name"` // corporation_name
	Name            string       `json:"name"`             // name
	Type            string       `json:"type"`             // type
	Classify        string       `json:"classify"`         // classify
	StartAt         sql.NullTime `json:"start_at"`         // start_at
	EndAt           sql.NullTime `json:"end_at"`           // end_at
	GeoPoint        Point        `json:"geo_point"`        // geo_point
	// xo fields
	_exists, _deleted bool
}

// Exists returns true when the Activity exists in the database.
func (a *Activity) Exists() bool {
	return a._exists
}

// Deleted returns true when the Activity has been marked for deletion from
// the database.
func (a *Activity) Deleted() bool {
	return a._deleted
}

// Insert inserts the Activity to the database.
func (a *Activity) Insert(ctx context.Context, db DB) error {
	switch {
	case a._exists: // already exists
		return logerror(&ErrInsertFailed{ErrAlreadyExists})
	case a._deleted: // deleted
		return logerror(&ErrInsertFailed{ErrMarkedForDeletion})
	}
	// insert (primary key generated and returned by database)
	const sqlstr = `INSERT INTO Attractech.activity (` +
		`updated_at, created_at, corporation_id, corporation_name, name, type, classify, start_at, end_at, geo_point` +
		`) VALUES (` +
		`?, ?, ?, ?, ?, ?, ?, ?, ?, ?` +
		`)`
	// run
	logf(sqlstr, a.UpdatedAt, a.CreatedAt, a.CorporationID, a.CorporationName, a.Name, a.Type, a.Classify, a.StartAt, a.EndAt, a.GeoPoint)
	res, err := db.ExecContext(ctx, sqlstr, a.UpdatedAt, a.CreatedAt, a.CorporationID, a.CorporationName, a.Name, a.Type, a.Classify, a.StartAt, a.EndAt, a.GeoPoint)
	if err != nil {
		return logerror(err)
	}
	// retrieve id
	id, err := res.LastInsertId()
	if err != nil {
		return logerror(err)
	} // set primary key
	a.ID = uint64(id)
	// set exists
	a._exists = true
	return nil
}

// Update updates a Activity in the database.
func (a *Activity) Update(ctx context.Context, db DB) error {
	switch {
	case !a._exists: // doesn't exist
		return logerror(&ErrUpdateFailed{ErrDoesNotExist})
	case a._deleted: // deleted
		return logerror(&ErrUpdateFailed{ErrMarkedForDeletion})
	}
	// update with primary key
	const sqlstr = `UPDATE Attractech.activity SET ` +
		`updated_at = ?, created_at = ?, corporation_id = ?, corporation_name = ?, name = ?, type = ?, classify = ?, start_at = ?, end_at = ?, geo_point = ? ` +
		`WHERE id = ?`
	// run
	logf(sqlstr, a.UpdatedAt, a.CreatedAt, a.CorporationID, a.CorporationName, a.Name, a.Type, a.Classify, a.StartAt, a.EndAt, a.GeoPoint, a.ID)
	if _, err := db.ExecContext(ctx, sqlstr, a.UpdatedAt, a.CreatedAt, a.CorporationID, a.CorporationName, a.Name, a.Type, a.Classify, a.StartAt, a.EndAt, a.GeoPoint, a.ID); err != nil {
		return logerror(err)
	}
	return nil
}

// Save saves the Activity to the database.
func (a *Activity) Save(ctx context.Context, db DB) error {
	if a.Exists() {
		return a.Update(ctx, db)
	}
	return a.Insert(ctx, db)
}

// Upsert performs an upsert for Activity.
func (a *Activity) Upsert(ctx context.Context, db DB) error {
	switch {
	case a._deleted: // deleted
		return logerror(&ErrUpsertFailed{ErrMarkedForDeletion})
	}
	// upsert
	const sqlstr = `INSERT INTO Attractech.activity (` +
		`id, updated_at, created_at, corporation_id, corporation_name, name, type, classify, start_at, end_at, geo_point` +
		`) VALUES (` +
		`?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?` +
		`)` +
		` ON DUPLICATE KEY UPDATE ` +
		`updated_at = VALUES(updated_at), created_at = VALUES(created_at), corporation_id = VALUES(corporation_id), corporation_name = VALUES(corporation_name), name = VALUES(name), type = VALUES(type), classify = VALUES(classify), start_at = VALUES(start_at), end_at = VALUES(end_at), geo_point = VALUES(geo_point)`
	// run
	logf(sqlstr, a.ID, a.UpdatedAt, a.CreatedAt, a.CorporationID, a.CorporationName, a.Name, a.Type, a.Classify, a.StartAt, a.EndAt, a.GeoPoint)
	if _, err := db.ExecContext(ctx, sqlstr, a.ID, a.UpdatedAt, a.CreatedAt, a.CorporationID, a.CorporationName, a.Name, a.Type, a.Classify, a.StartAt, a.EndAt, a.GeoPoint); err != nil {
		return logerror(err)
	}
	// set exists
	a._exists = true
	return nil
}

// Delete deletes the Activity from the database.
func (a *Activity) Delete(ctx context.Context, db DB) error {
	switch {
	case !a._exists: // doesn't exist
		return nil
	case a._deleted: // deleted
		return nil
	}
	// delete with single primary key
	const sqlstr = `DELETE FROM Attractech.activity ` +
		`WHERE id = ?`
	// run
	logf(sqlstr, a.ID)
	if _, err := db.ExecContext(ctx, sqlstr, a.ID); err != nil {
		return logerror(err)
	}
	// set deleted
	a._deleted = true
	return nil
}

// ActivityByID retrieves a row from 'Attractech.activity' as a Activity.
//
// Generated from index 'activity_id_pkey'.
func ActivityByID(ctx context.Context, db DB, id uint64) (*Activity, error) {
	// query
	const sqlstr = `SELECT ` +
		`id, updated_at, created_at, corporation_id, corporation_name, name, type, classify, start_at, end_at, geo_point ` +
		`FROM Attractech.activity ` +
		`WHERE id = ?`
	// run
	logf(sqlstr, id)
	a := Activity{
		_exists: true,
	}
	if err := db.QueryRowContext(ctx, sqlstr, id).Scan(&a.ID, &a.UpdatedAt, &a.CreatedAt, &a.CorporationID, &a.CorporationName, &a.Name, &a.Type, &a.Classify, &a.StartAt, &a.EndAt, &a.GeoPoint); err != nil {
		return nil, logerror(err)
	}
	return &a, nil
}
