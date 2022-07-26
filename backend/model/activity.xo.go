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
	ID              uint64       `json:"id" db:"id"`                             // id
	UpdatedAt       time.Time    `json:"updated_at" db:"updated_at"`             // updated_at
	CreatedAt       time.Time    `json:"created_at" db:"created_at"`             // created_at
	CorporationID   uint64       `json:"corporation_id" db:"corporation_id"`     // corporation_id
	CorporationName string       `json:"corporation_name" db:"corporation_name"` // corporation_name
	Name            string       `json:"name" db:"name"`                         // name
	Description     string       `json:"description" db:"description"`           // description
	Type            string       `json:"type" db:"type"`                         // type
	Classify        string       `json:"classify" db:"classify"`                 // classify
	StartAt         sql.NullTime `json:"start_at" db:"start_at"`                 // start_at
	EndAt           sql.NullTime `json:"end_at" db:"end_at"`                     // end_at
	Costs           string       `json:"costs" db:"costs"`                       // costs
	TimeCommitment  string       `json:"time_commitment" db:"time_commitment"`   // time_commitment
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
		`updated_at, created_at, corporation_id, corporation_name, name, description, type, classify, start_at, end_at, costs, time_commitment` +
		`) VALUES (` +
		`?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?` +
		`)`
	// run
	logf(sqlstr, a.UpdatedAt, a.CreatedAt, a.CorporationID, a.CorporationName, a.Name, a.Description, a.Type, a.Classify, a.StartAt, a.EndAt, a.Costs, a.TimeCommitment)
	res, err := db.ExecContext(ctx, sqlstr, a.UpdatedAt, a.CreatedAt, a.CorporationID, a.CorporationName, a.Name, a.Description, a.Type, a.Classify, a.StartAt, a.EndAt, a.Costs, a.TimeCommitment)
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
		`updated_at = ?, created_at = ?, corporation_id = ?, corporation_name = ?, name = ?, description = ?, type = ?, classify = ?, start_at = ?, end_at = ?, costs = ?, time_commitment = ? ` +
		`WHERE id = ?`
	// run
	logf(sqlstr, a.UpdatedAt, a.CreatedAt, a.CorporationID, a.CorporationName, a.Name, a.Description, a.Type, a.Classify, a.StartAt, a.EndAt, a.Costs, a.TimeCommitment, a.ID)
	if _, err := db.ExecContext(ctx, sqlstr, a.UpdatedAt, a.CreatedAt, a.CorporationID, a.CorporationName, a.Name, a.Description, a.Type, a.Classify, a.StartAt, a.EndAt, a.Costs, a.TimeCommitment, a.ID); err != nil {
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
		`id, updated_at, created_at, corporation_id, corporation_name, name, description, type, classify, start_at, end_at, costs, time_commitment` +
		`) VALUES (` +
		`?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?` +
		`)` +
		` ON DUPLICATE KEY UPDATE ` +
		`updated_at = VALUES(updated_at), created_at = VALUES(created_at), corporation_id = VALUES(corporation_id), corporation_name = VALUES(corporation_name), name = VALUES(name), description = VALUES(description), type = VALUES(type), classify = VALUES(classify), start_at = VALUES(start_at), end_at = VALUES(end_at), costs = VALUES(costs), time_commitment = VALUES(time_commitment)`
	// run
	logf(sqlstr, a.ID, a.UpdatedAt, a.CreatedAt, a.CorporationID, a.CorporationName, a.Name, a.Description, a.Type, a.Classify, a.StartAt, a.EndAt, a.Costs, a.TimeCommitment)
	if _, err := db.ExecContext(ctx, sqlstr, a.ID, a.UpdatedAt, a.CreatedAt, a.CorporationID, a.CorporationName, a.Name, a.Description, a.Type, a.Classify, a.StartAt, a.EndAt, a.Costs, a.TimeCommitment); err != nil {
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
		`id, updated_at, created_at, corporation_id, corporation_name, name, description, type, classify, start_at, end_at, costs, time_commitment ` +
		`FROM Attractech.activity ` +
		`WHERE id = ?`
	// run
	logf(sqlstr, id)
	a := Activity{
		_exists: true,
	}
	if err := db.QueryRowContext(ctx, sqlstr, id).Scan(&a.ID, &a.UpdatedAt, &a.CreatedAt, &a.CorporationID, &a.CorporationName, &a.Name, &a.Description, &a.Type, &a.Classify, &a.StartAt, &a.EndAt, &a.Costs, &a.TimeCommitment); err != nil {
		return nil, logerror(err)
	}
	return &a, nil
}

// ActivityByCorporationID retrieves a row from 'Attractech.activity' as a Activity.
//
// Generated from index 'corpid'.
func ActivityByCorporationID(ctx context.Context, db DB, corporationID uint64) ([]*Activity, error) {
	// query
	const sqlstr = `SELECT ` +
		`id, updated_at, created_at, corporation_id, corporation_name, name, description, type, classify, start_at, end_at, costs, time_commitment ` +
		`FROM Attractech.activity ` +
		`WHERE corporation_id = ?`
	// run
	logf(sqlstr, corporationID)
	rows, err := db.QueryContext(ctx, sqlstr, corporationID)
	if err != nil {
		return nil, logerror(err)
	}
	defer rows.Close()
	// process
	var res []*Activity
	for rows.Next() {
		a := Activity{
			_exists: true,
		}
		// scan
		if err := rows.Scan(&a.ID, &a.UpdatedAt, &a.CreatedAt, &a.CorporationID, &a.CorporationName, &a.Name, &a.Description, &a.Type, &a.Classify, &a.StartAt, &a.EndAt, &a.Costs, &a.TimeCommitment); err != nil {
			return nil, logerror(err)
		}
		res = append(res, &a)
	}
	if err := rows.Err(); err != nil {
		return nil, logerror(err)
	}
	return res, nil
}

// ActivityByCorporationName retrieves a row from 'Attractech.activity' as a Activity.
//
// Generated from index 'corpn'.
func ActivityByCorporationName(ctx context.Context, db DB, corporationName string) ([]*Activity, error) {
	// query
	const sqlstr = `SELECT ` +
		`id, updated_at, created_at, corporation_id, corporation_name, name, description, type, classify, start_at, end_at, costs, time_commitment ` +
		`FROM Attractech.activity ` +
		`WHERE corporation_name = ?`
	// run
	logf(sqlstr, corporationName)
	rows, err := db.QueryContext(ctx, sqlstr, corporationName)
	if err != nil {
		return nil, logerror(err)
	}
	defer rows.Close()
	// process
	var res []*Activity
	for rows.Next() {
		a := Activity{
			_exists: true,
		}
		// scan
		if err := rows.Scan(&a.ID, &a.UpdatedAt, &a.CreatedAt, &a.CorporationID, &a.CorporationName, &a.Name, &a.Description, &a.Type, &a.Classify, &a.StartAt, &a.EndAt, &a.Costs, &a.TimeCommitment); err != nil {
			return nil, logerror(err)
		}
		res = append(res, &a)
	}
	if err := rows.Err(); err != nil {
		return nil, logerror(err)
	}
	return res, nil
}
