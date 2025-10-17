# `query` Submodule <a name="`query` Submodule" id="@cdktf/provider-databricks.query"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Query <a name="Query" id="@cdktf/provider-databricks.query.Query"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query databricks_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.Query.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

query.NewQuery(scope Construct, id *string, config QueryConfig) Query
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryConfig">QueryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryConfig">QueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.query.Query.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.query.Query.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.query.Query.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.query.Query.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.query.Query.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.query.Query.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.query.Query.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetApplyAutoLimit">ResetApplyAutoLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetOwnerUserName">ResetOwnerUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetParentPath">ResetParentPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetRunAsMode">ResetRunAsMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.Query.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.query.Query.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.query.Query.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.Query.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.query.Query.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.query.Query.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.query.Query.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.query.Query.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.query.Query.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.query.Query.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.query.Query.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.query.Query.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.Query.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.Query.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.Query.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.Query.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.Query.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.Query.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.Query.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.Query.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.Query.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.query.Query.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.query.Query.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.query.Query.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.Query.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.Query.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.query.Query.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.query.Query.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.query.Query.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.query.Query.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.query.Query.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.query.Query.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-databricks.query.Query.putParameter"></a>

```go
func PutParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.Query.putParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplyAutoLimit` <a name="ResetApplyAutoLimit" id="@cdktf/provider-databricks.query.Query.resetApplyAutoLimit"></a>

```go
func ResetApplyAutoLimit()
```

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktf/provider-databricks.query.Query.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.query.Query.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetOwnerUserName` <a name="ResetOwnerUserName" id="@cdktf/provider-databricks.query.Query.resetOwnerUserName"></a>

```go
func ResetOwnerUserName()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-databricks.query.Query.resetParameter"></a>

```go
func ResetParameter()
```

##### `ResetParentPath` <a name="ResetParentPath" id="@cdktf/provider-databricks.query.Query.resetParentPath"></a>

```go
func ResetParentPath()
```

##### `ResetRunAsMode` <a name="ResetRunAsMode" id="@cdktf/provider-databricks.query.Query.resetRunAsMode"></a>

```go
func ResetRunAsMode()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-databricks.query.Query.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-databricks.query.Query.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.query.Query.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Query resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.query.Query.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

query.Query_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.query.Query.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.query.Query.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

query.Query_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.query.Query.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.query.Query.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

query.Query_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.query.Query.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.query.Query.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

query.Query_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Query resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Query to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Query that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Query to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.lastModifierUserName">LastModifierUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterList">QueryParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.applyAutoLimitInput">ApplyAutoLimitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.ownerUserNameInput">OwnerUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parameterInput">ParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parentPathInput">ParentPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.queryTextInput">QueryTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.runAsModeInput">RunAsModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.applyAutoLimit">ApplyAutoLimit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.ownerUserName">OwnerUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parentPath">ParentPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.queryText">QueryText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.runAsMode">RunAsMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.query.Query.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.query.Query.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.Query.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.query.Query.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.query.Query.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.query.Query.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.query.Query.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.query.Query.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.query.Query.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.query.Query.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.query.Query.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.query.Query.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.query.Query.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.query.Query.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.query.Query.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.query.Query.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifierUserName`<sup>Required</sup> <a name="LastModifierUserName" id="@cdktf/provider-databricks.query.Query.property.lastModifierUserName"></a>

```go
func LastModifierUserName() *string
```

- *Type:* *string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-databricks.query.Query.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-databricks.query.Query.property.parameter"></a>

```go
func Parameter() QueryParameterList
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterList">QueryParameterList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-databricks.query.Query.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ApplyAutoLimitInput`<sup>Optional</sup> <a name="ApplyAutoLimitInput" id="@cdktf/provider-databricks.query.Query.property.applyAutoLimitInput"></a>

```go
func ApplyAutoLimitInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktf/provider-databricks.query.Query.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.query.Query.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-databricks.query.Query.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `OwnerUserNameInput`<sup>Optional</sup> <a name="OwnerUserNameInput" id="@cdktf/provider-databricks.query.Query.property.ownerUserNameInput"></a>

```go
func OwnerUserNameInput() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-databricks.query.Query.property.parameterInput"></a>

```go
func ParameterInput() interface{}
```

- *Type:* interface{}

---

##### `ParentPathInput`<sup>Optional</sup> <a name="ParentPathInput" id="@cdktf/provider-databricks.query.Query.property.parentPathInput"></a>

```go
func ParentPathInput() *string
```

- *Type:* *string

---

##### `QueryTextInput`<sup>Optional</sup> <a name="QueryTextInput" id="@cdktf/provider-databricks.query.Query.property.queryTextInput"></a>

```go
func QueryTextInput() *string
```

- *Type:* *string

---

##### `RunAsModeInput`<sup>Optional</sup> <a name="RunAsModeInput" id="@cdktf/provider-databricks.query.Query.property.runAsModeInput"></a>

```go
func RunAsModeInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-databricks.query.Query.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-databricks.query.Query.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktf/provider-databricks.query.Query.property.warehouseIdInput"></a>

```go
func WarehouseIdInput() *string
```

- *Type:* *string

---

##### `ApplyAutoLimit`<sup>Required</sup> <a name="ApplyAutoLimit" id="@cdktf/provider-databricks.query.Query.property.applyAutoLimit"></a>

```go
func ApplyAutoLimit() interface{}
```

- *Type:* interface{}

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-databricks.query.Query.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.query.Query.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.query.Query.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `OwnerUserName`<sup>Required</sup> <a name="OwnerUserName" id="@cdktf/provider-databricks.query.Query.property.ownerUserName"></a>

```go
func OwnerUserName() *string
```

- *Type:* *string

---

##### `ParentPath`<sup>Required</sup> <a name="ParentPath" id="@cdktf/provider-databricks.query.Query.property.parentPath"></a>

```go
func ParentPath() *string
```

- *Type:* *string

---

##### `QueryText`<sup>Required</sup> <a name="QueryText" id="@cdktf/provider-databricks.query.Query.property.queryText"></a>

```go
func QueryText() *string
```

- *Type:* *string

---

##### `RunAsMode`<sup>Required</sup> <a name="RunAsMode" id="@cdktf/provider-databricks.query.Query.property.runAsMode"></a>

```go
func RunAsMode() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-databricks.query.Query.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-databricks.query.Query.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.query.Query.property.warehouseId"></a>

```go
func WarehouseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.query.Query.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QueryConfig <a name="QueryConfig" id="@cdktf/provider-databricks.query.QueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

&query.QueryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	QueryText: *string,
	WarehouseId: *string,
	ApplyAutoLimit: interface{},
	Catalog: *string,
	Description: *string,
	OwnerUserName: *string,
	Parameter: interface{},
	ParentPath: *string,
	RunAsMode: *string,
	Schema: *string,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#display_name Query#display_name}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.queryText">QueryText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#query_text Query#query_text}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#warehouse_id Query#warehouse_id}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.applyAutoLimit">ApplyAutoLimit</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#apply_auto_limit Query#apply_auto_limit}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.catalog">Catalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#catalog Query#catalog}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#description Query#description}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.ownerUserName">OwnerUserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#owner_user_name Query#owner_user_name}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.parameter">Parameter</a></code> | <code>interface{}</code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.parentPath">ParentPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#parent_path Query#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.runAsMode">RunAsMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#run_as_mode Query#run_as_mode}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.schema">Schema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#schema Query#schema}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#tags Query#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.query.QueryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.query.QueryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.query.QueryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.query.QueryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.query.QueryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.query.QueryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.query.QueryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.query.QueryConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#display_name Query#display_name}.

---

##### `QueryText`<sup>Required</sup> <a name="QueryText" id="@cdktf/provider-databricks.query.QueryConfig.property.queryText"></a>

```go
QueryText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#query_text Query#query_text}.

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.query.QueryConfig.property.warehouseId"></a>

```go
WarehouseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#warehouse_id Query#warehouse_id}.

---

##### `ApplyAutoLimit`<sup>Optional</sup> <a name="ApplyAutoLimit" id="@cdktf/provider-databricks.query.QueryConfig.property.applyAutoLimit"></a>

```go
ApplyAutoLimit interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#apply_auto_limit Query#apply_auto_limit}.

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktf/provider-databricks.query.QueryConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#catalog Query#catalog}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.query.QueryConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#description Query#description}.

---

##### `OwnerUserName`<sup>Optional</sup> <a name="OwnerUserName" id="@cdktf/provider-databricks.query.QueryConfig.property.ownerUserName"></a>

```go
OwnerUserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#owner_user_name Query#owner_user_name}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-databricks.query.QueryConfig.property.parameter"></a>

```go
Parameter interface{}
```

- *Type:* interface{}

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#parameter Query#parameter}

---

##### `ParentPath`<sup>Optional</sup> <a name="ParentPath" id="@cdktf/provider-databricks.query.QueryConfig.property.parentPath"></a>

```go
ParentPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#parent_path Query#parent_path}.

---

##### `RunAsMode`<sup>Optional</sup> <a name="RunAsMode" id="@cdktf/provider-databricks.query.QueryConfig.property.runAsMode"></a>

```go
RunAsMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#run_as_mode Query#run_as_mode}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-databricks.query.QueryConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#schema Query#schema}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-databricks.query.QueryConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#tags Query#tags}.

---

### QueryParameter <a name="QueryParameter" id="@cdktf/provider-databricks.query.QueryParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

&query.QueryParameter {
	Name: *string,
	DateRangeValue: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.query.QueryParameterDateRangeValue,
	DateValue: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.query.QueryParameterDateValue,
	EnumValue: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.query.QueryParameterEnumValue,
	NumericValue: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.query.QueryParameterNumericValue,
	QueryBackedValue: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.query.QueryParameterQueryBackedValue,
	TextValue: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.query.QueryParameterTextValue,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#name Query#name}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.dateRangeValue">DateRangeValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a></code> | date_range_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.dateValue">DateValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a></code> | date_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.enumValue">EnumValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a></code> | enum_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.numericValue">NumericValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a></code> | numeric_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.queryBackedValue">QueryBackedValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a></code> | query_backed_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.textValue">TextValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a></code> | text_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#title Query#title}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.query.QueryParameter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#name Query#name}.

---

##### `DateRangeValue`<sup>Optional</sup> <a name="DateRangeValue" id="@cdktf/provider-databricks.query.QueryParameter.property.dateRangeValue"></a>

```go
DateRangeValue QueryParameterDateRangeValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

date_range_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#date_range_value Query#date_range_value}

---

##### `DateValue`<sup>Optional</sup> <a name="DateValue" id="@cdktf/provider-databricks.query.QueryParameter.property.dateValue"></a>

```go
DateValue QueryParameterDateValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

date_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#date_value Query#date_value}

---

##### `EnumValue`<sup>Optional</sup> <a name="EnumValue" id="@cdktf/provider-databricks.query.QueryParameter.property.enumValue"></a>

```go
EnumValue QueryParameterEnumValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

enum_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#enum_value Query#enum_value}

---

##### `NumericValue`<sup>Optional</sup> <a name="NumericValue" id="@cdktf/provider-databricks.query.QueryParameter.property.numericValue"></a>

```go
NumericValue QueryParameterNumericValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

numeric_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#numeric_value Query#numeric_value}

---

##### `QueryBackedValue`<sup>Optional</sup> <a name="QueryBackedValue" id="@cdktf/provider-databricks.query.QueryParameter.property.queryBackedValue"></a>

```go
QueryBackedValue QueryParameterQueryBackedValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

query_backed_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#query_backed_value Query#query_backed_value}

---

##### `TextValue`<sup>Optional</sup> <a name="TextValue" id="@cdktf/provider-databricks.query.QueryParameter.property.textValue"></a>

```go
TextValue QueryParameterTextValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

text_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#text_value Query#text_value}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-databricks.query.QueryParameter.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#title Query#title}.

---

### QueryParameterDateRangeValue <a name="QueryParameterDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

&query.QueryParameterDateRangeValue {
	DateRangeValue: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.query.QueryParameterDateRangeValueDateRangeValue,
	DynamicDateRangeValue: *string,
	Precision: *string,
	StartDayOfWeek: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dateRangeValue">DateRangeValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a></code> | date_range_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dynamicDateRangeValue">DynamicDateRangeValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#dynamic_date_range_value Query#dynamic_date_range_value}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.precision">Precision</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#precision Query#precision}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.startDayOfWeek">StartDayOfWeek</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#start_day_of_week Query#start_day_of_week}. |

---

##### `DateRangeValue`<sup>Optional</sup> <a name="DateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dateRangeValue"></a>

```go
DateRangeValue QueryParameterDateRangeValueDateRangeValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

date_range_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#date_range_value Query#date_range_value}

---

##### `DynamicDateRangeValue`<sup>Optional</sup> <a name="DynamicDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dynamicDateRangeValue"></a>

```go
DynamicDateRangeValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#dynamic_date_range_value Query#dynamic_date_range_value}.

---

##### `Precision`<sup>Optional</sup> <a name="Precision" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.precision"></a>

```go
Precision *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#precision Query#precision}.

---

##### `StartDayOfWeek`<sup>Optional</sup> <a name="StartDayOfWeek" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.startDayOfWeek"></a>

```go
StartDayOfWeek *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#start_day_of_week Query#start_day_of_week}.

---

### QueryParameterDateRangeValueDateRangeValue <a name="QueryParameterDateRangeValueDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

&query.QueryParameterDateRangeValueDateRangeValue {
	End: *string,
	Start: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.end">End</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#end Query#end}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.start">Start</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#start Query#start}. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.end"></a>

```go
End *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#end Query#end}.

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.start"></a>

```go
Start *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#start Query#start}.

---

### QueryParameterDateValue <a name="QueryParameterDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterDateValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

&query.QueryParameterDateValue {
	DateValue: *string,
	DynamicDateValue: *string,
	Precision: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue.property.dateValue">DateValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#date_value Query#date_value}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue.property.dynamicDateValue">DynamicDateValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#dynamic_date_value Query#dynamic_date_value}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue.property.precision">Precision</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#precision Query#precision}. |

---

##### `DateValue`<sup>Optional</sup> <a name="DateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValue.property.dateValue"></a>

```go
DateValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#date_value Query#date_value}.

---

##### `DynamicDateValue`<sup>Optional</sup> <a name="DynamicDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValue.property.dynamicDateValue"></a>

```go
DynamicDateValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#dynamic_date_value Query#dynamic_date_value}.

---

##### `Precision`<sup>Optional</sup> <a name="Precision" id="@cdktf/provider-databricks.query.QueryParameterDateValue.property.precision"></a>

```go
Precision *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#precision Query#precision}.

---

### QueryParameterEnumValue <a name="QueryParameterEnumValue" id="@cdktf/provider-databricks.query.QueryParameterEnumValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

&query.QueryParameterEnumValue {
	EnumOptions: *string,
	MultiValuesOptions: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.query.QueryParameterEnumValueMultiValuesOptions,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue.property.enumOptions">EnumOptions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#enum_options Query#enum_options}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue.property.multiValuesOptions">MultiValuesOptions</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a></code> | multi_values_options block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#values Query#values}. |

---

##### `EnumOptions`<sup>Optional</sup> <a name="EnumOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.property.enumOptions"></a>

```go
EnumOptions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#enum_options Query#enum_options}.

---

##### `MultiValuesOptions`<sup>Optional</sup> <a name="MultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.property.multiValuesOptions"></a>

```go
MultiValuesOptions QueryParameterEnumValueMultiValuesOptions
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

multi_values_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#multi_values_options Query#multi_values_options}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#values Query#values}.

---

### QueryParameterEnumValueMultiValuesOptions <a name="QueryParameterEnumValueMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

&query.QueryParameterEnumValueMultiValuesOptions {
	Prefix: *string,
	Separator: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#prefix Query#prefix}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.separator">Separator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#separator Query#separator}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.suffix">Suffix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#suffix Query#suffix}. |

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#prefix Query#prefix}.

---

##### `Separator`<sup>Optional</sup> <a name="Separator" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.separator"></a>

```go
Separator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#separator Query#separator}.

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#suffix Query#suffix}.

---

### QueryParameterNumericValue <a name="QueryParameterNumericValue" id="@cdktf/provider-databricks.query.QueryParameterNumericValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterNumericValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

&query.QueryParameterNumericValue {
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#value Query#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.QueryParameterNumericValue.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#value Query#value}.

---

### QueryParameterQueryBackedValue <a name="QueryParameterQueryBackedValue" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

&query.QueryParameterQueryBackedValue {
	QueryId: *string,
	MultiValuesOptions: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.query.QueryParameterQueryBackedValueMultiValuesOptions,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.queryId">QueryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#query_id Query#query_id}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.multiValuesOptions">MultiValuesOptions</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a></code> | multi_values_options block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#values Query#values}. |

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.queryId"></a>

```go
QueryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#query_id Query#query_id}.

---

##### `MultiValuesOptions`<sup>Optional</sup> <a name="MultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.multiValuesOptions"></a>

```go
MultiValuesOptions QueryParameterQueryBackedValueMultiValuesOptions
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

multi_values_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#multi_values_options Query#multi_values_options}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#values Query#values}.

---

### QueryParameterQueryBackedValueMultiValuesOptions <a name="QueryParameterQueryBackedValueMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

&query.QueryParameterQueryBackedValueMultiValuesOptions {
	Prefix: *string,
	Separator: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#prefix Query#prefix}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.separator">Separator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#separator Query#separator}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.suffix">Suffix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#suffix Query#suffix}. |

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#prefix Query#prefix}.

---

##### `Separator`<sup>Optional</sup> <a name="Separator" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.separator"></a>

```go
Separator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#separator Query#separator}.

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#suffix Query#suffix}.

---

### QueryParameterTextValue <a name="QueryParameterTextValue" id="@cdktf/provider-databricks.query.QueryParameterTextValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterTextValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

&query.QueryParameterTextValue {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#value Query#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.QueryParameterTextValue.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/resources/query#value Query#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QueryParameterDateRangeValueDateRangeValueOutputReference <a name="QueryParameterDateRangeValueDateRangeValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

query.NewQueryParameterDateRangeValueDateRangeValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QueryParameterDateRangeValueDateRangeValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.endInput">EndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.startInput">StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.endInput"></a>

```go
func EndInput() *string
```

- *Type:* *string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.startInput"></a>

```go
func StartInput() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.internalValue"></a>

```go
func InternalValue() QueryParameterDateRangeValueDateRangeValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

---


### QueryParameterDateRangeValueOutputReference <a name="QueryParameterDateRangeValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

query.NewQueryParameterDateRangeValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QueryParameterDateRangeValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.putDateRangeValue">PutDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDateRangeValue">ResetDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDynamicDateRangeValue">ResetDynamicDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetPrecision">ResetPrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetStartDayOfWeek">ResetStartDayOfWeek</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDateRangeValue` <a name="PutDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.putDateRangeValue"></a>

```go
func PutDateRangeValue(value QueryParameterDateRangeValueDateRangeValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.putDateRangeValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

---

##### `ResetDateRangeValue` <a name="ResetDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDateRangeValue"></a>

```go
func ResetDateRangeValue()
```

##### `ResetDynamicDateRangeValue` <a name="ResetDynamicDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDynamicDateRangeValue"></a>

```go
func ResetDynamicDateRangeValue()
```

##### `ResetPrecision` <a name="ResetPrecision" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetPrecision"></a>

```go
func ResetPrecision()
```

##### `ResetStartDayOfWeek` <a name="ResetStartDayOfWeek" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetStartDayOfWeek"></a>

```go
func ResetStartDayOfWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValue">DateRangeValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference">QueryParameterDateRangeValueDateRangeValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValueInput">DateRangeValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValueInput">DynamicDateRangeValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precisionInput">PrecisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeekInput">StartDayOfWeekInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValue">DynamicDateRangeValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precision">Precision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeek">StartDayOfWeek</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateRangeValue`<sup>Required</sup> <a name="DateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValue"></a>

```go
func DateRangeValue() QueryParameterDateRangeValueDateRangeValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference">QueryParameterDateRangeValueDateRangeValueOutputReference</a>

---

##### `DateRangeValueInput`<sup>Optional</sup> <a name="DateRangeValueInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValueInput"></a>

```go
func DateRangeValueInput() QueryParameterDateRangeValueDateRangeValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

---

##### `DynamicDateRangeValueInput`<sup>Optional</sup> <a name="DynamicDateRangeValueInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValueInput"></a>

```go
func DynamicDateRangeValueInput() *string
```

- *Type:* *string

---

##### `PrecisionInput`<sup>Optional</sup> <a name="PrecisionInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precisionInput"></a>

```go
func PrecisionInput() *string
```

- *Type:* *string

---

##### `StartDayOfWeekInput`<sup>Optional</sup> <a name="StartDayOfWeekInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeekInput"></a>

```go
func StartDayOfWeekInput() *f64
```

- *Type:* *f64

---

##### `DynamicDateRangeValue`<sup>Required</sup> <a name="DynamicDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValue"></a>

```go
func DynamicDateRangeValue() *string
```

- *Type:* *string

---

##### `Precision`<sup>Required</sup> <a name="Precision" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precision"></a>

```go
func Precision() *string
```

- *Type:* *string

---

##### `StartDayOfWeek`<sup>Required</sup> <a name="StartDayOfWeek" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeek"></a>

```go
func StartDayOfWeek() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.internalValue"></a>

```go
func InternalValue() QueryParameterDateRangeValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

---


### QueryParameterDateValueOutputReference <a name="QueryParameterDateValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

query.NewQueryParameterDateValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QueryParameterDateValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDateValue">ResetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDynamicDateValue">ResetDynamicDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetPrecision">ResetPrecision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDateValue` <a name="ResetDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDateValue"></a>

```go
func ResetDateValue()
```

##### `ResetDynamicDateValue` <a name="ResetDynamicDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDynamicDateValue"></a>

```go
func ResetDynamicDateValue()
```

##### `ResetPrecision` <a name="ResetPrecision" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetPrecision"></a>

```go
func ResetPrecision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValueInput">DateValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValueInput">DynamicDateValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precisionInput">PrecisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValue">DateValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValue">DynamicDateValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precision">Precision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateValueInput`<sup>Optional</sup> <a name="DateValueInput" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValueInput"></a>

```go
func DateValueInput() *string
```

- *Type:* *string

---

##### `DynamicDateValueInput`<sup>Optional</sup> <a name="DynamicDateValueInput" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValueInput"></a>

```go
func DynamicDateValueInput() *string
```

- *Type:* *string

---

##### `PrecisionInput`<sup>Optional</sup> <a name="PrecisionInput" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precisionInput"></a>

```go
func PrecisionInput() *string
```

- *Type:* *string

---

##### `DateValue`<sup>Required</sup> <a name="DateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValue"></a>

```go
func DateValue() *string
```

- *Type:* *string

---

##### `DynamicDateValue`<sup>Required</sup> <a name="DynamicDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValue"></a>

```go
func DynamicDateValue() *string
```

- *Type:* *string

---

##### `Precision`<sup>Required</sup> <a name="Precision" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precision"></a>

```go
func Precision() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.internalValue"></a>

```go
func InternalValue() QueryParameterDateValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

---


### QueryParameterEnumValueMultiValuesOptionsOutputReference <a name="QueryParameterEnumValueMultiValuesOptionsOutputReference" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

query.NewQueryParameterEnumValueMultiValuesOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QueryParameterEnumValueMultiValuesOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSeparator">ResetSeparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSeparator` <a name="ResetSeparator" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSeparator"></a>

```go
func ResetSeparator()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separatorInput">SeparatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separator">Separator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SeparatorInput`<sup>Optional</sup> <a name="SeparatorInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separatorInput"></a>

```go
func SeparatorInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Separator`<sup>Required</sup> <a name="Separator" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separator"></a>

```go
func Separator() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() QueryParameterEnumValueMultiValuesOptions
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

---


### QueryParameterEnumValueOutputReference <a name="QueryParameterEnumValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

query.NewQueryParameterEnumValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QueryParameterEnumValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.putMultiValuesOptions">PutMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetEnumOptions">ResetEnumOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetMultiValuesOptions">ResetMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMultiValuesOptions` <a name="PutMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.putMultiValuesOptions"></a>

```go
func PutMultiValuesOptions(value QueryParameterEnumValueMultiValuesOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.putMultiValuesOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

---

##### `ResetEnumOptions` <a name="ResetEnumOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetEnumOptions"></a>

```go
func ResetEnumOptions()
```

##### `ResetMultiValuesOptions` <a name="ResetMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetMultiValuesOptions"></a>

```go
func ResetMultiValuesOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptions">MultiValuesOptions</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference">QueryParameterEnumValueMultiValuesOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptionsInput">EnumOptionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptionsInput">MultiValuesOptionsInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptions">EnumOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MultiValuesOptions`<sup>Required</sup> <a name="MultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptions"></a>

```go
func MultiValuesOptions() QueryParameterEnumValueMultiValuesOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference">QueryParameterEnumValueMultiValuesOptionsOutputReference</a>

---

##### `EnumOptionsInput`<sup>Optional</sup> <a name="EnumOptionsInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptionsInput"></a>

```go
func EnumOptionsInput() *string
```

- *Type:* *string

---

##### `MultiValuesOptionsInput`<sup>Optional</sup> <a name="MultiValuesOptionsInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptionsInput"></a>

```go
func MultiValuesOptionsInput() QueryParameterEnumValueMultiValuesOptions
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnumOptions`<sup>Required</sup> <a name="EnumOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptions"></a>

```go
func EnumOptions() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.internalValue"></a>

```go
func InternalValue() QueryParameterEnumValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

---


### QueryParameterList <a name="QueryParameterList" id="@cdktf/provider-databricks.query.QueryParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

query.NewQueryParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QueryParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.query.QueryParameterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.query.QueryParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.query.QueryParameterList.get"></a>

```go
func Get(index *f64) QueryParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.query.QueryParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QueryParameterNumericValueOutputReference <a name="QueryParameterNumericValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

query.NewQueryParameterNumericValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QueryParameterNumericValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.internalValue"></a>

```go
func InternalValue() QueryParameterNumericValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

---


### QueryParameterOutputReference <a name="QueryParameterOutputReference" id="@cdktf/provider-databricks.query.QueryParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

query.NewQueryParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QueryParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateRangeValue">PutDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateValue">PutDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putEnumValue">PutEnumValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putNumericValue">PutNumericValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putQueryBackedValue">PutQueryBackedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putTextValue">PutTextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateRangeValue">ResetDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateValue">ResetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetEnumValue">ResetEnumValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetNumericValue">ResetNumericValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetQueryBackedValue">ResetQueryBackedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTextValue">ResetTextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDateRangeValue` <a name="PutDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateRangeValue"></a>

```go
func PutDateRangeValue(value QueryParameterDateRangeValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateRangeValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

---

##### `PutDateValue` <a name="PutDateValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateValue"></a>

```go
func PutDateValue(value QueryParameterDateValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

---

##### `PutEnumValue` <a name="PutEnumValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putEnumValue"></a>

```go
func PutEnumValue(value QueryParameterEnumValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putEnumValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

---

##### `PutNumericValue` <a name="PutNumericValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putNumericValue"></a>

```go
func PutNumericValue(value QueryParameterNumericValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putNumericValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

---

##### `PutQueryBackedValue` <a name="PutQueryBackedValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putQueryBackedValue"></a>

```go
func PutQueryBackedValue(value QueryParameterQueryBackedValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putQueryBackedValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

---

##### `PutTextValue` <a name="PutTextValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putTextValue"></a>

```go
func PutTextValue(value QueryParameterTextValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putTextValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

---

##### `ResetDateRangeValue` <a name="ResetDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateRangeValue"></a>

```go
func ResetDateRangeValue()
```

##### `ResetDateValue` <a name="ResetDateValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateValue"></a>

```go
func ResetDateValue()
```

##### `ResetEnumValue` <a name="ResetEnumValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetEnumValue"></a>

```go
func ResetEnumValue()
```

##### `ResetNumericValue` <a name="ResetNumericValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetNumericValue"></a>

```go
func ResetNumericValue()
```

##### `ResetQueryBackedValue` <a name="ResetQueryBackedValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetQueryBackedValue"></a>

```go
func ResetQueryBackedValue()
```

##### `ResetTextValue` <a name="ResetTextValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTextValue"></a>

```go
func ResetTextValue()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValue">DateRangeValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference">QueryParameterDateRangeValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValue">DateValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference">QueryParameterDateValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValue">EnumValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference">QueryParameterEnumValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValue">NumericValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference">QueryParameterNumericValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValue">QueryBackedValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference">QueryParameterQueryBackedValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValue">TextValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference">QueryParameterTextValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValueInput">DateRangeValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValueInput">DateValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValueInput">EnumValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValueInput">NumericValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValueInput">QueryBackedValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValueInput">TextValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateRangeValue`<sup>Required</sup> <a name="DateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValue"></a>

```go
func DateRangeValue() QueryParameterDateRangeValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference">QueryParameterDateRangeValueOutputReference</a>

---

##### `DateValue`<sup>Required</sup> <a name="DateValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValue"></a>

```go
func DateValue() QueryParameterDateValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference">QueryParameterDateValueOutputReference</a>

---

##### `EnumValue`<sup>Required</sup> <a name="EnumValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValue"></a>

```go
func EnumValue() QueryParameterEnumValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference">QueryParameterEnumValueOutputReference</a>

---

##### `NumericValue`<sup>Required</sup> <a name="NumericValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValue"></a>

```go
func NumericValue() QueryParameterNumericValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference">QueryParameterNumericValueOutputReference</a>

---

##### `QueryBackedValue`<sup>Required</sup> <a name="QueryBackedValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValue"></a>

```go
func QueryBackedValue() QueryParameterQueryBackedValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference">QueryParameterQueryBackedValueOutputReference</a>

---

##### `TextValue`<sup>Required</sup> <a name="TextValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValue"></a>

```go
func TextValue() QueryParameterTextValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference">QueryParameterTextValueOutputReference</a>

---

##### `DateRangeValueInput`<sup>Optional</sup> <a name="DateRangeValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValueInput"></a>

```go
func DateRangeValueInput() QueryParameterDateRangeValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

---

##### `DateValueInput`<sup>Optional</sup> <a name="DateValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValueInput"></a>

```go
func DateValueInput() QueryParameterDateValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

---

##### `EnumValueInput`<sup>Optional</sup> <a name="EnumValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValueInput"></a>

```go
func EnumValueInput() QueryParameterEnumValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NumericValueInput`<sup>Optional</sup> <a name="NumericValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValueInput"></a>

```go
func NumericValueInput() QueryParameterNumericValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

---

##### `QueryBackedValueInput`<sup>Optional</sup> <a name="QueryBackedValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValueInput"></a>

```go
func QueryBackedValueInput() QueryParameterQueryBackedValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

---

##### `TextValueInput`<sup>Optional</sup> <a name="TextValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValueInput"></a>

```go
func TextValueInput() QueryParameterTextValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QueryParameterQueryBackedValueMultiValuesOptionsOutputReference <a name="QueryParameterQueryBackedValueMultiValuesOptionsOutputReference" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

query.NewQueryParameterQueryBackedValueMultiValuesOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QueryParameterQueryBackedValueMultiValuesOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSeparator">ResetSeparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSeparator` <a name="ResetSeparator" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSeparator"></a>

```go
func ResetSeparator()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separatorInput">SeparatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separator">Separator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SeparatorInput`<sup>Optional</sup> <a name="SeparatorInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separatorInput"></a>

```go
func SeparatorInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Separator`<sup>Required</sup> <a name="Separator" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separator"></a>

```go
func Separator() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() QueryParameterQueryBackedValueMultiValuesOptions
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

---


### QueryParameterQueryBackedValueOutputReference <a name="QueryParameterQueryBackedValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

query.NewQueryParameterQueryBackedValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QueryParameterQueryBackedValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.putMultiValuesOptions">PutMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetMultiValuesOptions">ResetMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMultiValuesOptions` <a name="PutMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.putMultiValuesOptions"></a>

```go
func PutMultiValuesOptions(value QueryParameterQueryBackedValueMultiValuesOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.putMultiValuesOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

---

##### `ResetMultiValuesOptions` <a name="ResetMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetMultiValuesOptions"></a>

```go
func ResetMultiValuesOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptions">MultiValuesOptions</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference">QueryParameterQueryBackedValueMultiValuesOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptionsInput">MultiValuesOptionsInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryIdInput">QueryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryId">QueryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MultiValuesOptions`<sup>Required</sup> <a name="MultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptions"></a>

```go
func MultiValuesOptions() QueryParameterQueryBackedValueMultiValuesOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference">QueryParameterQueryBackedValueMultiValuesOptionsOutputReference</a>

---

##### `MultiValuesOptionsInput`<sup>Optional</sup> <a name="MultiValuesOptionsInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptionsInput"></a>

```go
func MultiValuesOptionsInput() QueryParameterQueryBackedValueMultiValuesOptions
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

---

##### `QueryIdInput`<sup>Optional</sup> <a name="QueryIdInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryIdInput"></a>

```go
func QueryIdInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryId"></a>

```go
func QueryId() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.internalValue"></a>

```go
func InternalValue() QueryParameterQueryBackedValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

---


### QueryParameterTextValueOutputReference <a name="QueryParameterTextValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/query"

query.NewQueryParameterTextValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QueryParameterTextValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.internalValue"></a>

```go
func InternalValue() QueryParameterTextValue
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

---



