# `sqlTable` Submodule <a name="`sqlTable` Submodule" id="@cdktf/provider-databricks.sqlTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlTable <a name="SqlTable" id="@cdktf/provider-databricks.sqlTable.SqlTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table databricks_sql_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlTable.SqlTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/sqltable"

sqltable.NewSqlTable(scope Construct, id *string, config SqlTableConfig) SqlTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig">SqlTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlTable.SqlTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlTable.SqlTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.sqlTable.SqlTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig">SqlTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.putColumn">PutColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.resetClusterKeys">ResetClusterKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.resetColumn">ResetColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.resetDataSourceFormat">ResetDataSourceFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.resetPartitions">ResetPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.resetStorageCredentialName">ResetStorageCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.resetStorageLocation">ResetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.resetViewDefinition">ResetViewDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.resetWarehouseId">ResetWarehouseId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlTable.SqlTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.sqlTable.SqlTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlTable.SqlTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlTable.SqlTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.sqlTable.SqlTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.sqlTable.SqlTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.sqlTable.SqlTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.sqlTable.SqlTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.sqlTable.SqlTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.sqlTable.SqlTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.sqlTable.SqlTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlTable.SqlTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.sqlTable.SqlTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.sqlTable.SqlTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlTable.SqlTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlTable.SqlTable.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.sqlTable.SqlTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlTable.SqlTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.sqlTable.SqlTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlTable.SqlTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.sqlTable.SqlTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.sqlTable.SqlTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlTable.SqlTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutColumn` <a name="PutColumn" id="@cdktf/provider-databricks.sqlTable.SqlTable.putColumn"></a>

```go
func PutColumn(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlTable.SqlTable.putColumn.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktf/provider-databricks.sqlTable.SqlTable.resetClusterId"></a>

```go
func ResetClusterId()
```

##### `ResetClusterKeys` <a name="ResetClusterKeys" id="@cdktf/provider-databricks.sqlTable.SqlTable.resetClusterKeys"></a>

```go
func ResetClusterKeys()
```

##### `ResetColumn` <a name="ResetColumn" id="@cdktf/provider-databricks.sqlTable.SqlTable.resetColumn"></a>

```go
func ResetColumn()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.sqlTable.SqlTable.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDataSourceFormat` <a name="ResetDataSourceFormat" id="@cdktf/provider-databricks.sqlTable.SqlTable.resetDataSourceFormat"></a>

```go
func ResetDataSourceFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.sqlTable.SqlTable.resetId"></a>

```go
func ResetId()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-databricks.sqlTable.SqlTable.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.sqlTable.SqlTable.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetPartitions` <a name="ResetPartitions" id="@cdktf/provider-databricks.sqlTable.SqlTable.resetPartitions"></a>

```go
func ResetPartitions()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-databricks.sqlTable.SqlTable.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetStorageCredentialName` <a name="ResetStorageCredentialName" id="@cdktf/provider-databricks.sqlTable.SqlTable.resetStorageCredentialName"></a>

```go
func ResetStorageCredentialName()
```

##### `ResetStorageLocation` <a name="ResetStorageLocation" id="@cdktf/provider-databricks.sqlTable.SqlTable.resetStorageLocation"></a>

```go
func ResetStorageLocation()
```

##### `ResetViewDefinition` <a name="ResetViewDefinition" id="@cdktf/provider-databricks.sqlTable.SqlTable.resetViewDefinition"></a>

```go
func ResetViewDefinition()
```

##### `ResetWarehouseId` <a name="ResetWarehouseId" id="@cdktf/provider-databricks.sqlTable.SqlTable.resetWarehouseId"></a>

```go
func ResetWarehouseId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SqlTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.sqlTable.SqlTable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/sqltable"

sqltable.SqlTable_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlTable.SqlTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.sqlTable.SqlTable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/sqltable"

sqltable.SqlTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlTable.SqlTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.sqlTable.SqlTable.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/sqltable"

sqltable.SqlTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlTable.SqlTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.sqlTable.SqlTable.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/sqltable"

sqltable.SqlTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SqlTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlTable.SqlTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.sqlTable.SqlTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SqlTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.sqlTable.SqlTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SqlTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlTable.SqlTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SqlTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.column">Column</a></code> | <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnList">SqlTableColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.effectiveProperties">EffectiveProperties</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.clusterKeysInput">ClusterKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.columnInput">ColumnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.dataSourceFormatInput">DataSourceFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.optionsInput">OptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.partitionsInput">PartitionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.storageCredentialNameInput">StorageCredentialNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.storageLocationInput">StorageLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.tableTypeInput">TableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.viewDefinitionInput">ViewDefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.clusterKeys">ClusterKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.dataSourceFormat">DataSourceFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.options">Options</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.partitions">Partitions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.storageCredentialName">StorageCredentialName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.storageLocation">StorageLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.tableType">TableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.viewDefinition">ViewDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.column"></a>

```go
func Column() SqlTableColumnList
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnList">SqlTableColumnList</a>

---

##### `EffectiveProperties`<sup>Required</sup> <a name="EffectiveProperties" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.effectiveProperties"></a>

```go
func EffectiveProperties() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ClusterKeysInput`<sup>Optional</sup> <a name="ClusterKeysInput" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.clusterKeysInput"></a>

```go
func ClusterKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.columnInput"></a>

```go
func ColumnInput() interface{}
```

- *Type:* interface{}

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DataSourceFormatInput`<sup>Optional</sup> <a name="DataSourceFormatInput" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.dataSourceFormatInput"></a>

```go
func DataSourceFormatInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.optionsInput"></a>

```go
func OptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `PartitionsInput`<sup>Optional</sup> <a name="PartitionsInput" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.partitionsInput"></a>

```go
func PartitionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `StorageCredentialNameInput`<sup>Optional</sup> <a name="StorageCredentialNameInput" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.storageCredentialNameInput"></a>

```go
func StorageCredentialNameInput() *string
```

- *Type:* *string

---

##### `StorageLocationInput`<sup>Optional</sup> <a name="StorageLocationInput" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.storageLocationInput"></a>

```go
func StorageLocationInput() *string
```

- *Type:* *string

---

##### `TableTypeInput`<sup>Optional</sup> <a name="TableTypeInput" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.tableTypeInput"></a>

```go
func TableTypeInput() *string
```

- *Type:* *string

---

##### `ViewDefinitionInput`<sup>Optional</sup> <a name="ViewDefinitionInput" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.viewDefinitionInput"></a>

```go
func ViewDefinitionInput() *string
```

- *Type:* *string

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.warehouseIdInput"></a>

```go
func WarehouseIdInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ClusterKeys`<sup>Required</sup> <a name="ClusterKeys" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.clusterKeys"></a>

```go
func ClusterKeys() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `DataSourceFormat`<sup>Required</sup> <a name="DataSourceFormat" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.dataSourceFormat"></a>

```go
func DataSourceFormat() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.options"></a>

```go
func Options() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Partitions`<sup>Required</sup> <a name="Partitions" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.partitions"></a>

```go
func Partitions() *[]*string
```

- *Type:* *[]*string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `StorageCredentialName`<sup>Required</sup> <a name="StorageCredentialName" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.storageCredentialName"></a>

```go
func StorageCredentialName() *string
```

- *Type:* *string

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.storageLocation"></a>

```go
func StorageLocation() *string
```

- *Type:* *string

---

##### `TableType`<sup>Required</sup> <a name="TableType" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.tableType"></a>

```go
func TableType() *string
```

- *Type:* *string

---

##### `ViewDefinition`<sup>Required</sup> <a name="ViewDefinition" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.viewDefinition"></a>

```go
func ViewDefinition() *string
```

- *Type:* *string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.warehouseId"></a>

```go
func WarehouseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.sqlTable.SqlTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlTableColumn <a name="SqlTableColumn" id="@cdktf/provider-databricks.sqlTable.SqlTableColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlTable.SqlTableColumn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/sqltable"

&sqltable.SqlTableColumn {
	Name: *string,
	Comment: *string,
	Identity: *string,
	Nullable: interface{},
	Type: *string,
	TypeJson: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumn.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#name SqlTable#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumn.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#comment SqlTable#comment}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumn.property.identity">Identity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#identity SqlTable#identity}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumn.property.nullable">Nullable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#nullable SqlTable#nullable}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumn.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#type SqlTable#type}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumn.property.typeJson">TypeJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#type_json SqlTable#type_json}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlTable.SqlTableColumn.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#name SqlTable#name}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.sqlTable.SqlTableColumn.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#comment SqlTable#comment}.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-databricks.sqlTable.SqlTableColumn.property.identity"></a>

```go
Identity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#identity SqlTable#identity}.

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktf/provider-databricks.sqlTable.SqlTableColumn.property.nullable"></a>

```go
Nullable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#nullable SqlTable#nullable}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-databricks.sqlTable.SqlTableColumn.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#type SqlTable#type}.

---

##### `TypeJson`<sup>Optional</sup> <a name="TypeJson" id="@cdktf/provider-databricks.sqlTable.SqlTableColumn.property.typeJson"></a>

```go
TypeJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#type_json SqlTable#type_json}.

---

### SqlTableConfig <a name="SqlTableConfig" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/sqltable"

&sqltable.SqlTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CatalogName: *string,
	Name: *string,
	SchemaName: *string,
	TableType: *string,
	ClusterId: *string,
	ClusterKeys: *[]*string,
	Column: interface{},
	Comment: *string,
	DataSourceFormat: *string,
	Id: *string,
	Options: *map[string]*string,
	Owner: *string,
	Partitions: *[]*string,
	Properties: *map[string]*string,
	StorageCredentialName: *string,
	StorageLocation: *string,
	ViewDefinition: *string,
	WarehouseId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#catalog_name SqlTable#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#name SqlTable#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#schema_name SqlTable#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.tableType">TableType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#table_type SqlTable#table_type}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#cluster_id SqlTable#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.clusterKeys">ClusterKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#cluster_keys SqlTable#cluster_keys}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.column">Column</a></code> | <code>interface{}</code> | column block. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#comment SqlTable#comment}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.dataSourceFormat">DataSourceFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#data_source_format SqlTable#data_source_format}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#id SqlTable#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.options">Options</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#options SqlTable#options}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#owner SqlTable#owner}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.partitions">Partitions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#partitions SqlTable#partitions}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#properties SqlTable#properties}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.storageCredentialName">StorageCredentialName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#storage_credential_name SqlTable#storage_credential_name}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.storageLocation">StorageLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#storage_location SqlTable#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.viewDefinition">ViewDefinition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#view_definition SqlTable#view_definition}. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#warehouse_id SqlTable#warehouse_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#catalog_name SqlTable#catalog_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#name SqlTable#name}.

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#schema_name SqlTable#schema_name}.

---

##### `TableType`<sup>Required</sup> <a name="TableType" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.tableType"></a>

```go
TableType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#table_type SqlTable#table_type}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#cluster_id SqlTable#cluster_id}.

---

##### `ClusterKeys`<sup>Optional</sup> <a name="ClusterKeys" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.clusterKeys"></a>

```go
ClusterKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#cluster_keys SqlTable#cluster_keys}.

---

##### `Column`<sup>Optional</sup> <a name="Column" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.column"></a>

```go
Column interface{}
```

- *Type:* interface{}

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#column SqlTable#column}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#comment SqlTable#comment}.

---

##### `DataSourceFormat`<sup>Optional</sup> <a name="DataSourceFormat" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.dataSourceFormat"></a>

```go
DataSourceFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#data_source_format SqlTable#data_source_format}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#id SqlTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.options"></a>

```go
Options *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#options SqlTable#options}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#owner SqlTable#owner}.

---

##### `Partitions`<sup>Optional</sup> <a name="Partitions" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.partitions"></a>

```go
Partitions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#partitions SqlTable#partitions}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#properties SqlTable#properties}.

---

##### `StorageCredentialName`<sup>Optional</sup> <a name="StorageCredentialName" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.storageCredentialName"></a>

```go
StorageCredentialName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#storage_credential_name SqlTable#storage_credential_name}.

---

##### `StorageLocation`<sup>Optional</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.storageLocation"></a>

```go
StorageLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#storage_location SqlTable#storage_location}.

---

##### `ViewDefinition`<sup>Optional</sup> <a name="ViewDefinition" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.viewDefinition"></a>

```go
ViewDefinition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#view_definition SqlTable#view_definition}.

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.sqlTable.SqlTableConfig.property.warehouseId"></a>

```go
WarehouseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/sql_table#warehouse_id SqlTable#warehouse_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlTableColumnList <a name="SqlTableColumnList" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/sqltable"

sqltable.NewSqlTableColumnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SqlTableColumnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnList.get"></a>

```go
func Get(index *f64) SqlTableColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SqlTableColumnOutputReference <a name="SqlTableColumnOutputReference" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/sqltable"

sqltable.NewSqlTableColumnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SqlTableColumnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.resetNullable">ResetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.resetTypeJson">ResetTypeJson</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetNullable` <a name="ResetNullable" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.resetNullable"></a>

```go
func ResetNullable()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetTypeJson` <a name="ResetTypeJson" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.resetTypeJson"></a>

```go
func ResetTypeJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.identityInput">IdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.nullableInput">NullableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.typeJsonInput">TypeJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.identity">Identity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.nullable">Nullable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.typeJson">TypeJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.identityInput"></a>

```go
func IdentityInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NullableInput`<sup>Optional</sup> <a name="NullableInput" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.nullableInput"></a>

```go
func NullableInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `TypeJsonInput`<sup>Optional</sup> <a name="TypeJsonInput" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.typeJsonInput"></a>

```go
func TypeJsonInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.identity"></a>

```go
func Identity() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Nullable`<sup>Required</sup> <a name="Nullable" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.nullable"></a>

```go
func Nullable() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `TypeJson`<sup>Required</sup> <a name="TypeJson" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.typeJson"></a>

```go
func TypeJson() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlTable.SqlTableColumnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



