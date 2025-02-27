# `sqlEndpoint` Submodule <a name="`sqlEndpoint` Submodule" id="@cdktf/provider-databricks.sqlEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlEndpoint <a name="SqlEndpoint" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint databricks_sql_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

sqlendpoint.NewSqlEndpoint(scope Construct, id *string, config SqlEndpointConfig) SqlEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig">SqlEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig">SqlEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putChannel">PutChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetAutoStopMins">ResetAutoStopMins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetDataSourceId">ResetDataSourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetEnablePhoton">ResetEnablePhoton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetEnableServerlessCompute">ResetEnableServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetInstanceProfileArn">ResetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetMaxNumClusters">ResetMaxNumClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetMinNumClusters">ResetMinNumClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetSpotInstancePolicy">ResetSpotInstancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetWarehouseType">ResetWarehouseType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutChannel` <a name="PutChannel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putChannel"></a>

```go
func PutChannel(value SqlEndpointChannel)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putChannel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a>

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTags"></a>

```go
func PutTags(value SqlEndpointTags)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value SqlEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a>

---

##### `ResetAutoStopMins` <a name="ResetAutoStopMins" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetAutoStopMins"></a>

```go
func ResetAutoStopMins()
```

##### `ResetChannel` <a name="ResetChannel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetChannel"></a>

```go
func ResetChannel()
```

##### `ResetDataSourceId` <a name="ResetDataSourceId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetDataSourceId"></a>

```go
func ResetDataSourceId()
```

##### `ResetEnablePhoton` <a name="ResetEnablePhoton" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetEnablePhoton"></a>

```go
func ResetEnablePhoton()
```

##### `ResetEnableServerlessCompute` <a name="ResetEnableServerlessCompute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetEnableServerlessCompute"></a>

```go
func ResetEnableServerlessCompute()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceProfileArn` <a name="ResetInstanceProfileArn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetInstanceProfileArn"></a>

```go
func ResetInstanceProfileArn()
```

##### `ResetMaxNumClusters` <a name="ResetMaxNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetMaxNumClusters"></a>

```go
func ResetMaxNumClusters()
```

##### `ResetMinNumClusters` <a name="ResetMinNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetMinNumClusters"></a>

```go
func ResetMinNumClusters()
```

##### `ResetSpotInstancePolicy` <a name="ResetSpotInstancePolicy" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetSpotInstancePolicy"></a>

```go
func ResetSpotInstancePolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWarehouseType` <a name="ResetWarehouseType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetWarehouseType"></a>

```go
func ResetWarehouseType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SqlEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

sqlendpoint.SqlEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

sqlendpoint.SqlEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

sqlendpoint.SqlEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

sqlendpoint.SqlEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SqlEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SqlEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SqlEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SqlEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.channel">Channel</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference">SqlEndpointChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.creatorName">CreatorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.health">Health</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList">SqlEndpointHealthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.jdbcUrl">JdbcUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.numActiveSessions">NumActiveSessions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.numClusters">NumClusters</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.odbcParams">OdbcParams</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList">SqlEndpointOdbcParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference">SqlEndpointTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference">SqlEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.autoStopMinsInput">AutoStopMinsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.channelInput">ChannelInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.clusterSizeInput">ClusterSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dataSourceIdInput">DataSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enablePhotonInput">EnablePhotonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enableServerlessComputeInput">EnableServerlessComputeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.maxNumClustersInput">MaxNumClustersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.minNumClustersInput">MinNumClustersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.spotInstancePolicyInput">SpotInstancePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tagsInput">TagsInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.warehouseTypeInput">WarehouseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.autoStopMins">AutoStopMins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.clusterSize">ClusterSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enablePhoton">EnablePhoton</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enableServerlessCompute">EnableServerlessCompute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.maxNumClusters">MaxNumClusters</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.minNumClusters">MinNumClusters</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.spotInstancePolicy">SpotInstancePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.warehouseType">WarehouseType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.channel"></a>

```go
func Channel() SqlEndpointChannelOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference">SqlEndpointChannelOutputReference</a>

---

##### `CreatorName`<sup>Required</sup> <a name="CreatorName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.creatorName"></a>

```go
func CreatorName() *string
```

- *Type:* *string

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.health"></a>

```go
func Health() SqlEndpointHealthList
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList">SqlEndpointHealthList</a>

---

##### `JdbcUrl`<sup>Required</sup> <a name="JdbcUrl" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.jdbcUrl"></a>

```go
func JdbcUrl() *string
```

- *Type:* *string

---

##### `NumActiveSessions`<sup>Required</sup> <a name="NumActiveSessions" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.numActiveSessions"></a>

```go
func NumActiveSessions() *f64
```

- *Type:* *f64

---

##### `NumClusters`<sup>Required</sup> <a name="NumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.numClusters"></a>

```go
func NumClusters() *f64
```

- *Type:* *f64

---

##### `OdbcParams`<sup>Required</sup> <a name="OdbcParams" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.odbcParams"></a>

```go
func OdbcParams() SqlEndpointOdbcParamsList
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList">SqlEndpointOdbcParamsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tags"></a>

```go
func Tags() SqlEndpointTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference">SqlEndpointTagsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.timeouts"></a>

```go
func Timeouts() SqlEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference">SqlEndpointTimeoutsOutputReference</a>

---

##### `AutoStopMinsInput`<sup>Optional</sup> <a name="AutoStopMinsInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.autoStopMinsInput"></a>

```go
func AutoStopMinsInput() *f64
```

- *Type:* *f64

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.channelInput"></a>

```go
func ChannelInput() SqlEndpointChannel
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a>

---

##### `ClusterSizeInput`<sup>Optional</sup> <a name="ClusterSizeInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.clusterSizeInput"></a>

```go
func ClusterSizeInput() *string
```

- *Type:* *string

---

##### `DataSourceIdInput`<sup>Optional</sup> <a name="DataSourceIdInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dataSourceIdInput"></a>

```go
func DataSourceIdInput() *string
```

- *Type:* *string

---

##### `EnablePhotonInput`<sup>Optional</sup> <a name="EnablePhotonInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enablePhotonInput"></a>

```go
func EnablePhotonInput() interface{}
```

- *Type:* interface{}

---

##### `EnableServerlessComputeInput`<sup>Optional</sup> <a name="EnableServerlessComputeInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enableServerlessComputeInput"></a>

```go
func EnableServerlessComputeInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.instanceProfileArnInput"></a>

```go
func InstanceProfileArnInput() *string
```

- *Type:* *string

---

##### `MaxNumClustersInput`<sup>Optional</sup> <a name="MaxNumClustersInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.maxNumClustersInput"></a>

```go
func MaxNumClustersInput() *f64
```

- *Type:* *f64

---

##### `MinNumClustersInput`<sup>Optional</sup> <a name="MinNumClustersInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.minNumClustersInput"></a>

```go
func MinNumClustersInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SpotInstancePolicyInput`<sup>Optional</sup> <a name="SpotInstancePolicyInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.spotInstancePolicyInput"></a>

```go
func SpotInstancePolicyInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tagsInput"></a>

```go
func TagsInput() SqlEndpointTags
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WarehouseTypeInput`<sup>Optional</sup> <a name="WarehouseTypeInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.warehouseTypeInput"></a>

```go
func WarehouseTypeInput() *string
```

- *Type:* *string

---

##### `AutoStopMins`<sup>Required</sup> <a name="AutoStopMins" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.autoStopMins"></a>

```go
func AutoStopMins() *f64
```

- *Type:* *f64

---

##### `ClusterSize`<sup>Required</sup> <a name="ClusterSize" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.clusterSize"></a>

```go
func ClusterSize() *string
```

- *Type:* *string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `EnablePhoton`<sup>Required</sup> <a name="EnablePhoton" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enablePhoton"></a>

```go
func EnablePhoton() interface{}
```

- *Type:* interface{}

---

##### `EnableServerlessCompute`<sup>Required</sup> <a name="EnableServerlessCompute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enableServerlessCompute"></a>

```go
func EnableServerlessCompute() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.instanceProfileArn"></a>

```go
func InstanceProfileArn() *string
```

- *Type:* *string

---

##### `MaxNumClusters`<sup>Required</sup> <a name="MaxNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.maxNumClusters"></a>

```go
func MaxNumClusters() *f64
```

- *Type:* *f64

---

##### `MinNumClusters`<sup>Required</sup> <a name="MinNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.minNumClusters"></a>

```go
func MinNumClusters() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SpotInstancePolicy`<sup>Required</sup> <a name="SpotInstancePolicy" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.spotInstancePolicy"></a>

```go
func SpotInstancePolicy() *string
```

- *Type:* *string

---

##### `WarehouseType`<sup>Required</sup> <a name="WarehouseType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.warehouseType"></a>

```go
func WarehouseType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlEndpointChannel <a name="SqlEndpointChannel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

&sqlendpoint.SqlEndpointChannel {
	DbsqlVersion: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel.property.dbsqlVersion">DbsqlVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#dbsql_version SqlEndpoint#dbsql_version}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#name SqlEndpoint#name}. |

---

##### `DbsqlVersion`<sup>Optional</sup> <a name="DbsqlVersion" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel.property.dbsqlVersion"></a>

```go
DbsqlVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#dbsql_version SqlEndpoint#dbsql_version}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#name SqlEndpoint#name}.

---

### SqlEndpointConfig <a name="SqlEndpointConfig" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

&sqlendpoint.SqlEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterSize: *string,
	Name: *string,
	AutoStopMins: *f64,
	Channel: github.com/cdktf/cdktf-provider-databricks-go/databricks.sqlEndpoint.SqlEndpointChannel,
	DataSourceId: *string,
	EnablePhoton: interface{},
	EnableServerlessCompute: interface{},
	Id: *string,
	InstanceProfileArn: *string,
	MaxNumClusters: *f64,
	MinNumClusters: *f64,
	SpotInstancePolicy: *string,
	Tags: github.com/cdktf/cdktf-provider-databricks-go/databricks.sqlEndpoint.SqlEndpointTags,
	Timeouts: github.com/cdktf/cdktf-provider-databricks-go/databricks.sqlEndpoint.SqlEndpointTimeouts,
	WarehouseType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.clusterSize">ClusterSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#cluster_size SqlEndpoint#cluster_size}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#name SqlEndpoint#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.autoStopMins">AutoStopMins</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#auto_stop_mins SqlEndpoint#auto_stop_mins}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.channel">Channel</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a></code> | channel block. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#data_source_id SqlEndpoint#data_source_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.enablePhoton">EnablePhoton</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#enable_photon SqlEndpoint#enable_photon}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.enableServerlessCompute">EnableServerlessCompute</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#enable_serverless_compute SqlEndpoint#enable_serverless_compute}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#id SqlEndpoint#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#instance_profile_arn SqlEndpoint#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.maxNumClusters">MaxNumClusters</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#max_num_clusters SqlEndpoint#max_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.minNumClusters">MinNumClusters</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#min_num_clusters SqlEndpoint#min_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.spotInstancePolicy">SpotInstancePolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#spot_instance_policy SqlEndpoint#spot_instance_policy}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a></code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.warehouseType">WarehouseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#warehouse_type SqlEndpoint#warehouse_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterSize`<sup>Required</sup> <a name="ClusterSize" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.clusterSize"></a>

```go
ClusterSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#cluster_size SqlEndpoint#cluster_size}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#name SqlEndpoint#name}.

---

##### `AutoStopMins`<sup>Optional</sup> <a name="AutoStopMins" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.autoStopMins"></a>

```go
AutoStopMins *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#auto_stop_mins SqlEndpoint#auto_stop_mins}.

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.channel"></a>

```go
Channel SqlEndpointChannel
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a>

channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#channel SqlEndpoint#channel}

---

##### `DataSourceId`<sup>Optional</sup> <a name="DataSourceId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.dataSourceId"></a>

```go
DataSourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#data_source_id SqlEndpoint#data_source_id}.

---

##### `EnablePhoton`<sup>Optional</sup> <a name="EnablePhoton" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.enablePhoton"></a>

```go
EnablePhoton interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#enable_photon SqlEndpoint#enable_photon}.

---

##### `EnableServerlessCompute`<sup>Optional</sup> <a name="EnableServerlessCompute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.enableServerlessCompute"></a>

```go
EnableServerlessCompute interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#enable_serverless_compute SqlEndpoint#enable_serverless_compute}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#id SqlEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceProfileArn`<sup>Optional</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.instanceProfileArn"></a>

```go
InstanceProfileArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#instance_profile_arn SqlEndpoint#instance_profile_arn}.

---

##### `MaxNumClusters`<sup>Optional</sup> <a name="MaxNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.maxNumClusters"></a>

```go
MaxNumClusters *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#max_num_clusters SqlEndpoint#max_num_clusters}.

---

##### `MinNumClusters`<sup>Optional</sup> <a name="MinNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.minNumClusters"></a>

```go
MinNumClusters *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#min_num_clusters SqlEndpoint#min_num_clusters}.

---

##### `SpotInstancePolicy`<sup>Optional</sup> <a name="SpotInstancePolicy" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.spotInstancePolicy"></a>

```go
SpotInstancePolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#spot_instance_policy SqlEndpoint#spot_instance_policy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.tags"></a>

```go
Tags SqlEndpointTags
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#tags SqlEndpoint#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.timeouts"></a>

```go
Timeouts SqlEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#timeouts SqlEndpoint#timeouts}

---

##### `WarehouseType`<sup>Optional</sup> <a name="WarehouseType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.warehouseType"></a>

```go
WarehouseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#warehouse_type SqlEndpoint#warehouse_type}.

---

### SqlEndpointHealth <a name="SqlEndpointHealth" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

&sqlendpoint.SqlEndpointHealth {

}
```


### SqlEndpointHealthFailureReason <a name="SqlEndpointHealthFailureReason" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReason"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReason.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

&sqlendpoint.SqlEndpointHealthFailureReason {

}
```


### SqlEndpointOdbcParams <a name="SqlEndpointOdbcParams" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

&sqlendpoint.SqlEndpointOdbcParams {

}
```


### SqlEndpointTags <a name="SqlEndpointTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

&sqlendpoint.SqlEndpointTags {
	CustomTags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags.property.customTags">CustomTags</a></code> | <code>interface{}</code> | custom_tags block. |

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags.property.customTags"></a>

```go
CustomTags interface{}
```

- *Type:* interface{}

custom_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#custom_tags SqlEndpoint#custom_tags}

---

### SqlEndpointTagsCustomTags <a name="SqlEndpointTagsCustomTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

&sqlendpoint.SqlEndpointTagsCustomTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#key SqlEndpoint#key}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#value SqlEndpoint#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#key SqlEndpoint#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#value SqlEndpoint#value}.

---

### SqlEndpointTimeouts <a name="SqlEndpointTimeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

&sqlendpoint.SqlEndpointTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#create SqlEndpoint#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/resources/sql_endpoint#create SqlEndpoint#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlEndpointChannelOutputReference <a name="SqlEndpointChannelOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

sqlendpoint.NewSqlEndpointChannelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlEndpointChannelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resetDbsqlVersion">ResetDbsqlVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbsqlVersion` <a name="ResetDbsqlVersion" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resetDbsqlVersion"></a>

```go
func ResetDbsqlVersion()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.dbsqlVersionInput">DbsqlVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.dbsqlVersion">DbsqlVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbsqlVersionInput`<sup>Optional</sup> <a name="DbsqlVersionInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.dbsqlVersionInput"></a>

```go
func DbsqlVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `DbsqlVersion`<sup>Required</sup> <a name="DbsqlVersion" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.dbsqlVersion"></a>

```go
func DbsqlVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlEndpointChannel
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a>

---


### SqlEndpointHealthFailureReasonList <a name="SqlEndpointHealthFailureReasonList" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

sqlendpoint.NewSqlEndpointHealthFailureReasonList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SqlEndpointHealthFailureReasonList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.get"></a>

```go
func Get(index *f64) SqlEndpointHealthFailureReasonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SqlEndpointHealthFailureReasonOutputReference <a name="SqlEndpointHealthFailureReasonOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

sqlendpoint.NewSqlEndpointHealthFailureReasonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SqlEndpointHealthFailureReasonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.parameters">Parameters</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReason">SqlEndpointHealthFailureReason</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.parameters"></a>

```go
func Parameters() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlEndpointHealthFailureReason
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReason">SqlEndpointHealthFailureReason</a>

---


### SqlEndpointHealthList <a name="SqlEndpointHealthList" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

sqlendpoint.NewSqlEndpointHealthList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SqlEndpointHealthList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.get"></a>

```go
func Get(index *f64) SqlEndpointHealthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SqlEndpointHealthOutputReference <a name="SqlEndpointHealthOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

sqlendpoint.NewSqlEndpointHealthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SqlEndpointHealthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.details">Details</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.failureReason">FailureReason</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList">SqlEndpointHealthFailureReasonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealth">SqlEndpointHealth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.details"></a>

```go
func Details() *string
```

- *Type:* *string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.failureReason"></a>

```go
func FailureReason() SqlEndpointHealthFailureReasonList
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList">SqlEndpointHealthFailureReasonList</a>

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlEndpointHealth
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealth">SqlEndpointHealth</a>

---


### SqlEndpointOdbcParamsList <a name="SqlEndpointOdbcParamsList" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

sqlendpoint.NewSqlEndpointOdbcParamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SqlEndpointOdbcParamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.get"></a>

```go
func Get(index *f64) SqlEndpointOdbcParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SqlEndpointOdbcParamsOutputReference <a name="SqlEndpointOdbcParamsOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

sqlendpoint.NewSqlEndpointOdbcParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SqlEndpointOdbcParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams">SqlEndpointOdbcParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlEndpointOdbcParams
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams">SqlEndpointOdbcParams</a>

---


### SqlEndpointTagsCustomTagsList <a name="SqlEndpointTagsCustomTagsList" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

sqlendpoint.NewSqlEndpointTagsCustomTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SqlEndpointTagsCustomTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.get"></a>

```go
func Get(index *f64) SqlEndpointTagsCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SqlEndpointTagsCustomTagsOutputReference <a name="SqlEndpointTagsCustomTagsOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

sqlendpoint.NewSqlEndpointTagsCustomTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SqlEndpointTagsCustomTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SqlEndpointTagsOutputReference <a name="SqlEndpointTagsOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

sqlendpoint.NewSqlEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.putCustomTags">PutCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.resetCustomTags">ResetCustomTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomTags` <a name="PutCustomTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.putCustomTags"></a>

```go
func PutCustomTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.putCustomTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.resetCustomTags"></a>

```go
func ResetCustomTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.customTags">CustomTags</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList">SqlEndpointTagsCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.customTagsInput">CustomTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.customTags"></a>

```go
func CustomTags() SqlEndpointTagsCustomTagsList
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList">SqlEndpointTagsCustomTagsList</a>

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.customTagsInput"></a>

```go
func CustomTagsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlEndpointTags
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a>

---


### SqlEndpointTimeoutsOutputReference <a name="SqlEndpointTimeoutsOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/sqlendpoint"

sqlendpoint.NewSqlEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



