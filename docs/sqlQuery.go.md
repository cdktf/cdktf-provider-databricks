# `sqlQuery` Submodule <a name="`sqlQuery` Submodule" id="@cdktf/provider-databricks.sqlQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlQuery <a name="SqlQuery" id="@cdktf/provider-databricks.sqlQuery.SqlQuery"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query databricks_sql_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQuery(scope Construct, id *string, config SqlQueryConfig) SqlQuery
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig">SqlQueryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig">SqlQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetRunAsRole">ResetRunAsRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putParameter"></a>

```go
func PutParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putSchedule"></a>

```go
func PutSchedule(value SqlQuerySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

---

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetCreatedAt"></a>

```go
func ResetCreatedAt()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetId"></a>

```go
func ResetId()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParameter"></a>

```go
func ResetParameter()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParent"></a>

```go
func ResetParent()
```

##### `ResetRunAsRole` <a name="ResetRunAsRole" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetRunAsRole"></a>

```go
func ResetRunAsRole()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetUpdatedAt"></a>

```go
func ResetUpdatedAt()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SqlQuery resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.SqlQuery_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.SqlQuery_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.SqlQuery_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.SqlQuery_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SqlQuery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SqlQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SqlQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SqlQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList">SqlQueryParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference">SqlQueryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.createdAtInput">CreatedAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceIdInput">DataSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameterInput">ParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRoleInput">RunAsRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.updatedAtInput">UpdatedAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRole">RunAsRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameter"></a>

```go
func Parameter() SqlQueryParameterList
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList">SqlQueryParameterList</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.schedule"></a>

```go
func Schedule() SqlQueryScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference">SqlQueryScheduleOutputReference</a>

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.createdAtInput"></a>

```go
func CreatedAtInput() *string
```

- *Type:* *string

---

##### `DataSourceIdInput`<sup>Optional</sup> <a name="DataSourceIdInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceIdInput"></a>

```go
func DataSourceIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameterInput"></a>

```go
func ParameterInput() interface{}
```

- *Type:* interface{}

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `RunAsRoleInput`<sup>Optional</sup> <a name="RunAsRoleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRoleInput"></a>

```go
func RunAsRoleInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.scheduleInput"></a>

```go
func ScheduleInput() SqlQuerySchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.updatedAtInput"></a>

```go
func UpdatedAtInput() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `RunAsRole`<sup>Required</sup> <a name="RunAsRole" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRole"></a>

```go
func RunAsRole() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlQueryConfig <a name="SqlQueryConfig" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataSourceId: *string,
	Name: *string,
	Query: *string,
	CreatedAt: *string,
	Description: *string,
	Id: *string,
	Parameter: interface{},
	Parent: *string,
	RunAsRole: *string,
	Schedule: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQuerySchedule,
	Tags: *[]*string,
	UpdatedAt: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#data_source_id SqlQuery#data_source_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#name SqlQuery#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.query">Query</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#query SqlQuery#query}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.createdAt">CreatedAt</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#created_at SqlQuery#created_at}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#description SqlQuery#description}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#id SqlQuery#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parameter">Parameter</a></code> | <code>interface{}</code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#parent SqlQuery#parent}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.runAsRole">RunAsRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#run_as_role SqlQuery#run_as_role}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#tags SqlQuery#tags}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#updated_at SqlQuery#updated_at}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dataSourceId"></a>

```go
DataSourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#data_source_id SqlQuery#data_source_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#name SqlQuery#name}.

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.query"></a>

```go
Query *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#query SqlQuery#query}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.createdAt"></a>

```go
CreatedAt *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#created_at SqlQuery#created_at}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#description SqlQuery#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#id SqlQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parameter"></a>

```go
Parameter interface{}
```

- *Type:* interface{}

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#parameter SqlQuery#parameter}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#parent SqlQuery#parent}.

---

##### `RunAsRole`<sup>Optional</sup> <a name="RunAsRole" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.runAsRole"></a>

```go
RunAsRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#run_as_role SqlQuery#run_as_role}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.schedule"></a>

```go
Schedule SqlQuerySchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#schedule SqlQuery#schedule}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#tags SqlQuery#tags}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.updatedAt"></a>

```go
UpdatedAt *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#updated_at SqlQuery#updated_at}.

---

### SqlQueryParameter <a name="SqlQueryParameter" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryParameter {
	Name: *string,
	Date: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQueryParameterDate,
	DateRange: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQueryParameterDateRange,
	Datetime: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQueryParameterDatetime,
	DatetimeRange: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQueryParameterDatetimeRange,
	Datetimesec: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQueryParameterDatetimesec,
	DatetimesecRange: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQueryParameterDatetimesecRange,
	Enum: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQueryParameterEnum,
	Number: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQueryParameterNumber,
	Query: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQueryParameterQuery,
	Text: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQueryParameterText,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#name SqlQuery#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.date">Date</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a></code> | date block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.dateRange">DateRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a></code> | date_range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetime">Datetime</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a></code> | datetime block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimeRange">DatetimeRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a></code> | datetime_range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesec">Datetimesec</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a></code> | datetimesec block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesecRange">DatetimesecRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a></code> | datetimesec_range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.enum">Enum</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a></code> | enum block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.number">Number</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a></code> | number block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.query">Query</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.text">Text</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a></code> | text block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#title SqlQuery#title}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#name SqlQuery#name}.

---

##### `Date`<sup>Optional</sup> <a name="Date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.date"></a>

```go
Date SqlQueryParameterDate
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#date SqlQuery#date}

---

##### `DateRange`<sup>Optional</sup> <a name="DateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.dateRange"></a>

```go
DateRange SqlQueryParameterDateRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

date_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#date_range SqlQuery#date_range}

---

##### `Datetime`<sup>Optional</sup> <a name="Datetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetime"></a>

```go
Datetime SqlQueryParameterDatetime
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

datetime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#datetime SqlQuery#datetime}

---

##### `DatetimeRange`<sup>Optional</sup> <a name="DatetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimeRange"></a>

```go
DatetimeRange SqlQueryParameterDatetimeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

datetime_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#datetime_range SqlQuery#datetime_range}

---

##### `Datetimesec`<sup>Optional</sup> <a name="Datetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesec"></a>

```go
Datetimesec SqlQueryParameterDatetimesec
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

datetimesec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#datetimesec SqlQuery#datetimesec}

---

##### `DatetimesecRange`<sup>Optional</sup> <a name="DatetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesecRange"></a>

```go
DatetimesecRange SqlQueryParameterDatetimesecRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

datetimesec_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#datetimesec_range SqlQuery#datetimesec_range}

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.enum"></a>

```go
Enum SqlQueryParameterEnum
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

enum block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#enum SqlQuery#enum}

---

##### `Number`<sup>Optional</sup> <a name="Number" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.number"></a>

```go
Number SqlQueryParameterNumber
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

number block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#number SqlQuery#number}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.query"></a>

```go
Query SqlQueryParameterQuery
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#query SqlQuery#query}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.text"></a>

```go
Text SqlQueryParameterText
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#text SqlQuery#text}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#title SqlQuery#title}.

---

### SqlQueryParameterDate <a name="SqlQueryParameterDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryParameterDate {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDateRange <a name="SqlQueryParameterDateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryParameterDateRange {
	Range: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQueryParameterDateRangeRange,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.range">Range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.range"></a>

```go
Range SqlQueryParameterDateRangeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#range SqlQuery#range}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDateRangeRange <a name="SqlQueryParameterDateRangeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryParameterDateRangeRange {
	End: *string,
	Start: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.end">End</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#end SqlQuery#end}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.start">Start</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#start SqlQuery#start}. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.end"></a>

```go
End *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#end SqlQuery#end}.

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.start"></a>

```go
Start *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#start SqlQuery#start}.

---

### SqlQueryParameterDatetime <a name="SqlQueryParameterDatetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryParameterDatetime {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimeRange <a name="SqlQueryParameterDatetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryParameterDatetimeRange {
	Range: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQueryParameterDatetimeRangeRange,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.range">Range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.range"></a>

```go
Range SqlQueryParameterDatetimeRangeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#range SqlQuery#range}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimeRangeRange <a name="SqlQueryParameterDatetimeRangeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryParameterDatetimeRangeRange {
	End: *string,
	Start: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.end">End</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#end SqlQuery#end}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.start">Start</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#start SqlQuery#start}. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.end"></a>

```go
End *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#end SqlQuery#end}.

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.start"></a>

```go
Start *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#start SqlQuery#start}.

---

### SqlQueryParameterDatetimesec <a name="SqlQueryParameterDatetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryParameterDatetimesec {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimesecRange <a name="SqlQueryParameterDatetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryParameterDatetimesecRange {
	Range: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQueryParameterDatetimesecRangeRange,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.range">Range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.range"></a>

```go
Range SqlQueryParameterDatetimesecRangeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#range SqlQuery#range}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimesecRangeRange <a name="SqlQueryParameterDatetimesecRangeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryParameterDatetimesecRangeRange {
	End: *string,
	Start: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.end">End</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#end SqlQuery#end}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.start">Start</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#start SqlQuery#start}. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.end"></a>

```go
End *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#end SqlQuery#end}.

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.start"></a>

```go
Start *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#start SqlQuery#start}.

---

### SqlQueryParameterEnum <a name="SqlQueryParameterEnum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryParameterEnum {
	Options: *[]*string,
	Multiple: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQueryParameterEnumMultiple,
	Value: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.options">Options</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#options SqlQuery#options}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.multiple">Multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a></code> | multiple block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#values SqlQuery#values}. |

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.options"></a>

```go
Options *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#options SqlQuery#options}.

---

##### `Multiple`<sup>Optional</sup> <a name="Multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.multiple"></a>

```go
Multiple SqlQueryParameterEnumMultiple
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

multiple block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#multiple SqlQuery#multiple}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#values SqlQuery#values}.

---

### SqlQueryParameterEnumMultiple <a name="SqlQueryParameterEnumMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryParameterEnumMultiple {
	Separator: *string,
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.separator">Separator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#separator SqlQuery#separator}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#prefix SqlQuery#prefix}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.suffix">Suffix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#suffix SqlQuery#suffix}. |

---

##### `Separator`<sup>Required</sup> <a name="Separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.separator"></a>

```go
Separator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#separator SqlQuery#separator}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#prefix SqlQuery#prefix}.

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#suffix SqlQuery#suffix}.

---

### SqlQueryParameterNumber <a name="SqlQueryParameterNumber" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryParameterNumber {
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterQuery <a name="SqlQueryParameterQuery" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryParameterQuery {
	QueryId: *string,
	Multiple: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQueryParameterQueryMultiple,
	Value: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.queryId">QueryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#query_id SqlQuery#query_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.multiple">Multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a></code> | multiple block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#values SqlQuery#values}. |

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.queryId"></a>

```go
QueryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#query_id SqlQuery#query_id}.

---

##### `Multiple`<sup>Optional</sup> <a name="Multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.multiple"></a>

```go
Multiple SqlQueryParameterQueryMultiple
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

multiple block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#multiple SqlQuery#multiple}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#values SqlQuery#values}.

---

### SqlQueryParameterQueryMultiple <a name="SqlQueryParameterQueryMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryParameterQueryMultiple {
	Separator: *string,
	Prefix: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.separator">Separator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#separator SqlQuery#separator}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#prefix SqlQuery#prefix}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.suffix">Suffix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#suffix SqlQuery#suffix}. |

---

##### `Separator`<sup>Required</sup> <a name="Separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.separator"></a>

```go
Separator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#separator SqlQuery#separator}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#prefix SqlQuery#prefix}.

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#suffix SqlQuery#suffix}.

---

### SqlQueryParameterText <a name="SqlQueryParameterText" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryParameterText {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQuerySchedule <a name="SqlQuerySchedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQuerySchedule {
	Continuous: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQueryScheduleContinuous,
	Daily: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQueryScheduleDaily,
	Weekly: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlQuery.SqlQueryScheduleWeekly,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.continuous">Continuous</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a></code> | continuous block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.daily">Daily</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a></code> | daily block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.weekly">Weekly</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a></code> | weekly block. |

---

##### `Continuous`<sup>Optional</sup> <a name="Continuous" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.continuous"></a>

```go
Continuous SqlQueryScheduleContinuous
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

continuous block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#continuous SqlQuery#continuous}

---

##### `Daily`<sup>Optional</sup> <a name="Daily" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.daily"></a>

```go
Daily SqlQueryScheduleDaily
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#daily SqlQuery#daily}

---

##### `Weekly`<sup>Optional</sup> <a name="Weekly" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.weekly"></a>

```go
Weekly SqlQueryScheduleWeekly
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#weekly SqlQuery#weekly}

---

### SqlQueryScheduleContinuous <a name="SqlQueryScheduleContinuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryScheduleContinuous {
	IntervalSeconds: *f64,
	UntilDate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#interval_seconds SqlQuery#interval_seconds}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.untilDate">UntilDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#until_date SqlQuery#until_date}. |

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.intervalSeconds"></a>

```go
IntervalSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#interval_seconds SqlQuery#interval_seconds}.

---

##### `UntilDate`<sup>Optional</sup> <a name="UntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.untilDate"></a>

```go
UntilDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#until_date SqlQuery#until_date}.

---

### SqlQueryScheduleDaily <a name="SqlQueryScheduleDaily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryScheduleDaily {
	IntervalDays: *f64,
	TimeOfDay: *string,
	UntilDate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.intervalDays">IntervalDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#interval_days SqlQuery#interval_days}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.timeOfDay">TimeOfDay</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.untilDate">UntilDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#until_date SqlQuery#until_date}. |

---

##### `IntervalDays`<sup>Required</sup> <a name="IntervalDays" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.intervalDays"></a>

```go
IntervalDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#interval_days SqlQuery#interval_days}.

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.timeOfDay"></a>

```go
TimeOfDay *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}.

---

##### `UntilDate`<sup>Optional</sup> <a name="UntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.untilDate"></a>

```go
UntilDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#until_date SqlQuery#until_date}.

---

### SqlQueryScheduleWeekly <a name="SqlQueryScheduleWeekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

&sqlquery.SqlQueryScheduleWeekly {
	DayOfWeek: *string,
	IntervalWeeks: *f64,
	TimeOfDay: *string,
	UntilDate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#day_of_week SqlQuery#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.intervalWeeks">IntervalWeeks</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#interval_weeks SqlQuery#interval_weeks}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.timeOfDay">TimeOfDay</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.untilDate">UntilDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#until_date SqlQuery#until_date}. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.dayOfWeek"></a>

```go
DayOfWeek *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#day_of_week SqlQuery#day_of_week}.

---

##### `IntervalWeeks`<sup>Required</sup> <a name="IntervalWeeks" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.intervalWeeks"></a>

```go
IntervalWeeks *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#interval_weeks SqlQuery#interval_weeks}.

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.timeOfDay"></a>

```go
TimeOfDay *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}.

---

##### `UntilDate`<sup>Optional</sup> <a name="UntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.untilDate"></a>

```go
UntilDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/sql_query#until_date SqlQuery#until_date}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlQueryParameterDateOutputReference <a name="SqlQueryParameterDateOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryParameterDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryParameterDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQueryParameterDate
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

---


### SqlQueryParameterDateRangeOutputReference <a name="SqlQueryParameterDateRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryParameterDateRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryParameterDateRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.putRange"></a>

```go
func PutRange(value SqlQueryParameterDateRangeRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

---

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetRange"></a>

```go
func ResetRange()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference">SqlQueryParameterDateRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.range"></a>

```go
func Range() SqlQueryParameterDateRangeRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference">SqlQueryParameterDateRangeRangeOutputReference</a>

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.rangeInput"></a>

```go
func RangeInput() SqlQueryParameterDateRangeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQueryParameterDateRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

---


### SqlQueryParameterDateRangeRangeOutputReference <a name="SqlQueryParameterDateRangeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryParameterDateRangeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryParameterDateRangeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.endInput">EndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.startInput">StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.endInput"></a>

```go
func EndInput() *string
```

- *Type:* *string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.startInput"></a>

```go
func StartInput() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQueryParameterDateRangeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

---


### SqlQueryParameterDatetimeOutputReference <a name="SqlQueryParameterDatetimeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryParameterDatetimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryParameterDatetimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQueryParameterDatetime
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

---


### SqlQueryParameterDatetimeRangeOutputReference <a name="SqlQueryParameterDatetimeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryParameterDatetimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryParameterDatetimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.putRange"></a>

```go
func PutRange(value SqlQueryParameterDatetimeRangeRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

---

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetRange"></a>

```go
func ResetRange()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference">SqlQueryParameterDatetimeRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.range"></a>

```go
func Range() SqlQueryParameterDatetimeRangeRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference">SqlQueryParameterDatetimeRangeRangeOutputReference</a>

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.rangeInput"></a>

```go
func RangeInput() SqlQueryParameterDatetimeRangeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQueryParameterDatetimeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

---


### SqlQueryParameterDatetimeRangeRangeOutputReference <a name="SqlQueryParameterDatetimeRangeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryParameterDatetimeRangeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryParameterDatetimeRangeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.endInput">EndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.startInput">StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.endInput"></a>

```go
func EndInput() *string
```

- *Type:* *string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.startInput"></a>

```go
func StartInput() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQueryParameterDatetimeRangeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

---


### SqlQueryParameterDatetimesecOutputReference <a name="SqlQueryParameterDatetimesecOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryParameterDatetimesecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryParameterDatetimesecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQueryParameterDatetimesec
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

---


### SqlQueryParameterDatetimesecRangeOutputReference <a name="SqlQueryParameterDatetimesecRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryParameterDatetimesecRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryParameterDatetimesecRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.putRange"></a>

```go
func PutRange(value SqlQueryParameterDatetimesecRangeRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

---

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetRange"></a>

```go
func ResetRange()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference">SqlQueryParameterDatetimesecRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.range"></a>

```go
func Range() SqlQueryParameterDatetimesecRangeRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference">SqlQueryParameterDatetimesecRangeRangeOutputReference</a>

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.rangeInput"></a>

```go
func RangeInput() SqlQueryParameterDatetimesecRangeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQueryParameterDatetimesecRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

---


### SqlQueryParameterDatetimesecRangeRangeOutputReference <a name="SqlQueryParameterDatetimesecRangeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryParameterDatetimesecRangeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryParameterDatetimesecRangeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.endInput">EndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.startInput">StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.endInput"></a>

```go
func EndInput() *string
```

- *Type:* *string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.startInput"></a>

```go
func StartInput() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQueryParameterDatetimesecRangeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

---


### SqlQueryParameterEnumMultipleOutputReference <a name="SqlQueryParameterEnumMultipleOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryParameterEnumMultipleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryParameterEnumMultipleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separatorInput">SeparatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separator">Separator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SeparatorInput`<sup>Optional</sup> <a name="SeparatorInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separatorInput"></a>

```go
func SeparatorInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Separator`<sup>Required</sup> <a name="Separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separator"></a>

```go
func Separator() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQueryParameterEnumMultiple
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

---


### SqlQueryParameterEnumOutputReference <a name="SqlQueryParameterEnumOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryParameterEnumOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryParameterEnumOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.putMultiple">PutMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetMultiple">ResetMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMultiple` <a name="PutMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.putMultiple"></a>

```go
func PutMultiple(value SqlQueryParameterEnumMultiple)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.putMultiple.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

---

##### `ResetMultiple` <a name="ResetMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetMultiple"></a>

```go
func ResetMultiple()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multiple">Multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference">SqlQueryParameterEnumMultipleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multipleInput">MultipleInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.optionsInput">OptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.options">Options</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Multiple`<sup>Required</sup> <a name="Multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multiple"></a>

```go
func Multiple() SqlQueryParameterEnumMultipleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference">SqlQueryParameterEnumMultipleOutputReference</a>

---

##### `MultipleInput`<sup>Optional</sup> <a name="MultipleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multipleInput"></a>

```go
func MultipleInput() SqlQueryParameterEnumMultiple
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.optionsInput"></a>

```go
func OptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.options"></a>

```go
func Options() *[]*string
```

- *Type:* *[]*string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQueryParameterEnum
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

---


### SqlQueryParameterList <a name="SqlQueryParameterList" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SqlQueryParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.get"></a>

```go
func Get(index *f64) SqlQueryParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SqlQueryParameterNumberOutputReference <a name="SqlQueryParameterNumberOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryParameterNumberOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryParameterNumberOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQueryParameterNumber
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

---


### SqlQueryParameterOutputReference <a name="SqlQueryParameterOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SqlQueryParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDate">PutDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDateRange">PutDateRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetime">PutDatetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimeRange">PutDatetimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesec">PutDatetimesec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesecRange">PutDatetimesecRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putEnum">PutEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putNumber">PutNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putQuery">PutQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putText">PutText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDate">ResetDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDateRange">ResetDateRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetime">ResetDatetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimeRange">ResetDatetimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesec">ResetDatetimesec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesecRange">ResetDatetimesecRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetNumber">ResetNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDate` <a name="PutDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDate"></a>

```go
func PutDate(value SqlQueryParameterDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

---

##### `PutDateRange` <a name="PutDateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDateRange"></a>

```go
func PutDateRange(value SqlQueryParameterDateRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDateRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

---

##### `PutDatetime` <a name="PutDatetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetime"></a>

```go
func PutDatetime(value SqlQueryParameterDatetime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

---

##### `PutDatetimeRange` <a name="PutDatetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimeRange"></a>

```go
func PutDatetimeRange(value SqlQueryParameterDatetimeRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

---

##### `PutDatetimesec` <a name="PutDatetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesec"></a>

```go
func PutDatetimesec(value SqlQueryParameterDatetimesec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

---

##### `PutDatetimesecRange` <a name="PutDatetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesecRange"></a>

```go
func PutDatetimesecRange(value SqlQueryParameterDatetimesecRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesecRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

---

##### `PutEnum` <a name="PutEnum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putEnum"></a>

```go
func PutEnum(value SqlQueryParameterEnum)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putEnum.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

---

##### `PutNumber` <a name="PutNumber" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putNumber"></a>

```go
func PutNumber(value SqlQueryParameterNumber)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putNumber.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

---

##### `PutQuery` <a name="PutQuery" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putQuery"></a>

```go
func PutQuery(value SqlQueryParameterQuery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

---

##### `PutText` <a name="PutText" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putText"></a>

```go
func PutText(value SqlQueryParameterText)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

---

##### `ResetDate` <a name="ResetDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDate"></a>

```go
func ResetDate()
```

##### `ResetDateRange` <a name="ResetDateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDateRange"></a>

```go
func ResetDateRange()
```

##### `ResetDatetime` <a name="ResetDatetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetime"></a>

```go
func ResetDatetime()
```

##### `ResetDatetimeRange` <a name="ResetDatetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimeRange"></a>

```go
func ResetDatetimeRange()
```

##### `ResetDatetimesec` <a name="ResetDatetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesec"></a>

```go
func ResetDatetimesec()
```

##### `ResetDatetimesecRange` <a name="ResetDatetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesecRange"></a>

```go
func ResetDatetimesecRange()
```

##### `ResetEnum` <a name="ResetEnum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetEnum"></a>

```go
func ResetEnum()
```

##### `ResetNumber` <a name="ResetNumber" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetNumber"></a>

```go
func ResetNumber()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetQuery"></a>

```go
func ResetQuery()
```

##### `ResetText` <a name="ResetText" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetText"></a>

```go
func ResetText()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.date">Date</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference">SqlQueryParameterDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRange">DateRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference">SqlQueryParameterDateRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetime">Datetime</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference">SqlQueryParameterDatetimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRange">DatetimeRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference">SqlQueryParameterDatetimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesec">Datetimesec</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference">SqlQueryParameterDatetimesecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRange">DatetimesecRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference">SqlQueryParameterDatetimesecRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enum">Enum</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference">SqlQueryParameterEnumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.number">Number</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference">SqlQueryParameterNumberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.query">Query</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference">SqlQueryParameterQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.text">Text</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference">SqlQueryParameterTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateInput">DateInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRangeInput">DateRangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeInput">DatetimeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRangeInput">DatetimeRangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecInput">DatetimesecInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRangeInput">DatetimesecRangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enumInput">EnumInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.numberInput">NumberInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.queryInput">QueryInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.textInput">TextInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Date`<sup>Required</sup> <a name="Date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.date"></a>

```go
func Date() SqlQueryParameterDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference">SqlQueryParameterDateOutputReference</a>

---

##### `DateRange`<sup>Required</sup> <a name="DateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRange"></a>

```go
func DateRange() SqlQueryParameterDateRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference">SqlQueryParameterDateRangeOutputReference</a>

---

##### `Datetime`<sup>Required</sup> <a name="Datetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetime"></a>

```go
func Datetime() SqlQueryParameterDatetimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference">SqlQueryParameterDatetimeOutputReference</a>

---

##### `DatetimeRange`<sup>Required</sup> <a name="DatetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRange"></a>

```go
func DatetimeRange() SqlQueryParameterDatetimeRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference">SqlQueryParameterDatetimeRangeOutputReference</a>

---

##### `Datetimesec`<sup>Required</sup> <a name="Datetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesec"></a>

```go
func Datetimesec() SqlQueryParameterDatetimesecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference">SqlQueryParameterDatetimesecOutputReference</a>

---

##### `DatetimesecRange`<sup>Required</sup> <a name="DatetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRange"></a>

```go
func DatetimesecRange() SqlQueryParameterDatetimesecRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference">SqlQueryParameterDatetimesecRangeOutputReference</a>

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enum"></a>

```go
func Enum() SqlQueryParameterEnumOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference">SqlQueryParameterEnumOutputReference</a>

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.number"></a>

```go
func Number() SqlQueryParameterNumberOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference">SqlQueryParameterNumberOutputReference</a>

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.query"></a>

```go
func Query() SqlQueryParameterQueryOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference">SqlQueryParameterQueryOutputReference</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.text"></a>

```go
func Text() SqlQueryParameterTextOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference">SqlQueryParameterTextOutputReference</a>

---

##### `DateInput`<sup>Optional</sup> <a name="DateInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateInput"></a>

```go
func DateInput() SqlQueryParameterDate
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

---

##### `DateRangeInput`<sup>Optional</sup> <a name="DateRangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRangeInput"></a>

```go
func DateRangeInput() SqlQueryParameterDateRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

---

##### `DatetimeInput`<sup>Optional</sup> <a name="DatetimeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeInput"></a>

```go
func DatetimeInput() SqlQueryParameterDatetime
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

---

##### `DatetimeRangeInput`<sup>Optional</sup> <a name="DatetimeRangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRangeInput"></a>

```go
func DatetimeRangeInput() SqlQueryParameterDatetimeRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

---

##### `DatetimesecInput`<sup>Optional</sup> <a name="DatetimesecInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecInput"></a>

```go
func DatetimesecInput() SqlQueryParameterDatetimesec
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

---

##### `DatetimesecRangeInput`<sup>Optional</sup> <a name="DatetimesecRangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRangeInput"></a>

```go
func DatetimesecRangeInput() SqlQueryParameterDatetimesecRange
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enumInput"></a>

```go
func EnumInput() SqlQueryParameterEnum
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.numberInput"></a>

```go
func NumberInput() SqlQueryParameterNumber
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.queryInput"></a>

```go
func QueryInput() SqlQueryParameterQuery
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.textInput"></a>

```go
func TextInput() SqlQueryParameterText
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SqlQueryParameterQueryMultipleOutputReference <a name="SqlQueryParameterQueryMultipleOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryParameterQueryMultipleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryParameterQueryMultipleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separatorInput">SeparatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separator">Separator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SeparatorInput`<sup>Optional</sup> <a name="SeparatorInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separatorInput"></a>

```go
func SeparatorInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Separator`<sup>Required</sup> <a name="Separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separator"></a>

```go
func Separator() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQueryParameterQueryMultiple
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

---


### SqlQueryParameterQueryOutputReference <a name="SqlQueryParameterQueryOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryParameterQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryParameterQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.putMultiple">PutMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetMultiple">ResetMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMultiple` <a name="PutMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.putMultiple"></a>

```go
func PutMultiple(value SqlQueryParameterQueryMultiple)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.putMultiple.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

---

##### `ResetMultiple` <a name="ResetMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetMultiple"></a>

```go
func ResetMultiple()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multiple">Multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference">SqlQueryParameterQueryMultipleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multipleInput">MultipleInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryIdInput">QueryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryId">QueryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Multiple`<sup>Required</sup> <a name="Multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multiple"></a>

```go
func Multiple() SqlQueryParameterQueryMultipleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference">SqlQueryParameterQueryMultipleOutputReference</a>

---

##### `MultipleInput`<sup>Optional</sup> <a name="MultipleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multipleInput"></a>

```go
func MultipleInput() SqlQueryParameterQueryMultiple
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

---

##### `QueryIdInput`<sup>Optional</sup> <a name="QueryIdInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryIdInput"></a>

```go
func QueryIdInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryId"></a>

```go
func QueryId() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQueryParameterQuery
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

---


### SqlQueryParameterTextOutputReference <a name="SqlQueryParameterTextOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryParameterTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryParameterTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQueryParameterText
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

---


### SqlQueryScheduleContinuousOutputReference <a name="SqlQueryScheduleContinuousOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryScheduleContinuousOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryScheduleContinuousOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resetUntilDate">ResetUntilDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUntilDate` <a name="ResetUntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resetUntilDate"></a>

```go
func ResetUntilDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDateInput">UntilDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDate">UntilDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSecondsInput"></a>

```go
func IntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `UntilDateInput`<sup>Optional</sup> <a name="UntilDateInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDateInput"></a>

```go
func UntilDateInput() *string
```

- *Type:* *string

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSeconds"></a>

```go
func IntervalSeconds() *f64
```

- *Type:* *f64

---

##### `UntilDate`<sup>Required</sup> <a name="UntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDate"></a>

```go
func UntilDate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQueryScheduleContinuous
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

---


### SqlQueryScheduleDailyOutputReference <a name="SqlQueryScheduleDailyOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryScheduleDailyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryScheduleDailyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resetUntilDate">ResetUntilDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUntilDate` <a name="ResetUntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resetUntilDate"></a>

```go
func ResetUntilDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDaysInput">IntervalDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDayInput">TimeOfDayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDateInput">UntilDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDays">IntervalDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDate">UntilDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntervalDaysInput`<sup>Optional</sup> <a name="IntervalDaysInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDaysInput"></a>

```go
func IntervalDaysInput() *f64
```

- *Type:* *f64

---

##### `TimeOfDayInput`<sup>Optional</sup> <a name="TimeOfDayInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDayInput"></a>

```go
func TimeOfDayInput() *string
```

- *Type:* *string

---

##### `UntilDateInput`<sup>Optional</sup> <a name="UntilDateInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDateInput"></a>

```go
func UntilDateInput() *string
```

- *Type:* *string

---

##### `IntervalDays`<sup>Required</sup> <a name="IntervalDays" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDays"></a>

```go
func IntervalDays() *f64
```

- *Type:* *f64

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDay"></a>

```go
func TimeOfDay() *string
```

- *Type:* *string

---

##### `UntilDate`<sup>Required</sup> <a name="UntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDate"></a>

```go
func UntilDate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQueryScheduleDaily
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

---


### SqlQueryScheduleOutputReference <a name="SqlQueryScheduleOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putContinuous">PutContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putDaily">PutDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putWeekly">PutWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetContinuous">ResetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetDaily">ResetDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetWeekly">ResetWeekly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContinuous` <a name="PutContinuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putContinuous"></a>

```go
func PutContinuous(value SqlQueryScheduleContinuous)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putContinuous.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

---

##### `PutDaily` <a name="PutDaily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putDaily"></a>

```go
func PutDaily(value SqlQueryScheduleDaily)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

---

##### `PutWeekly` <a name="PutWeekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putWeekly"></a>

```go
func PutWeekly(value SqlQueryScheduleWeekly)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

---

##### `ResetContinuous` <a name="ResetContinuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetContinuous"></a>

```go
func ResetContinuous()
```

##### `ResetDaily` <a name="ResetDaily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetDaily"></a>

```go
func ResetDaily()
```

##### `ResetWeekly` <a name="ResetWeekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetWeekly"></a>

```go
func ResetWeekly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuous">Continuous</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference">SqlQueryScheduleContinuousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.daily">Daily</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference">SqlQueryScheduleDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weekly">Weekly</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference">SqlQueryScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuousInput">ContinuousInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.dailyInput">DailyInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weeklyInput">WeeklyInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Continuous`<sup>Required</sup> <a name="Continuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuous"></a>

```go
func Continuous() SqlQueryScheduleContinuousOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference">SqlQueryScheduleContinuousOutputReference</a>

---

##### `Daily`<sup>Required</sup> <a name="Daily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.daily"></a>

```go
func Daily() SqlQueryScheduleDailyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference">SqlQueryScheduleDailyOutputReference</a>

---

##### `Weekly`<sup>Required</sup> <a name="Weekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weekly"></a>

```go
func Weekly() SqlQueryScheduleWeeklyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference">SqlQueryScheduleWeeklyOutputReference</a>

---

##### `ContinuousInput`<sup>Optional</sup> <a name="ContinuousInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuousInput"></a>

```go
func ContinuousInput() SqlQueryScheduleContinuous
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

---

##### `DailyInput`<sup>Optional</sup> <a name="DailyInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.dailyInput"></a>

```go
func DailyInput() SqlQueryScheduleDaily
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

---

##### `WeeklyInput`<sup>Optional</sup> <a name="WeeklyInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weeklyInput"></a>

```go
func WeeklyInput() SqlQueryScheduleWeekly
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQuerySchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

---


### SqlQueryScheduleWeeklyOutputReference <a name="SqlQueryScheduleWeeklyOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlquery"

sqlquery.NewSqlQueryScheduleWeeklyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlQueryScheduleWeeklyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resetUntilDate">ResetUntilDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUntilDate` <a name="ResetUntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resetUntilDate"></a>

```go
func ResetUntilDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeksInput">IntervalWeeksInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDayInput">TimeOfDayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDateInput">UntilDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeks">IntervalWeeks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDate">UntilDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *string
```

- *Type:* *string

---

##### `IntervalWeeksInput`<sup>Optional</sup> <a name="IntervalWeeksInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeksInput"></a>

```go
func IntervalWeeksInput() *f64
```

- *Type:* *f64

---

##### `TimeOfDayInput`<sup>Optional</sup> <a name="TimeOfDayInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDayInput"></a>

```go
func TimeOfDayInput() *string
```

- *Type:* *string

---

##### `UntilDateInput`<sup>Optional</sup> <a name="UntilDateInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDateInput"></a>

```go
func UntilDateInput() *string
```

- *Type:* *string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `IntervalWeeks`<sup>Required</sup> <a name="IntervalWeeks" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeks"></a>

```go
func IntervalWeeks() *f64
```

- *Type:* *f64

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDay"></a>

```go
func TimeOfDay() *string
```

- *Type:* *string

---

##### `UntilDate`<sup>Required</sup> <a name="UntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDate"></a>

```go
func UntilDate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlQueryScheduleWeekly
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

---



