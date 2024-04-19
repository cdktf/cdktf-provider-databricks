# `grant` Submodule <a name="`grant` Submodule" id="@cdktf/provider-databricks.grant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Grant <a name="Grant" id="@cdktf/provider-databricks.grant.Grant"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant databricks_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.grant.Grant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/grant"

grant.NewGrant(scope Construct, id *string, config GrantConfig) Grant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.grant.GrantConfig">GrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.grant.GrantConfig">GrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetExternalLocation">ResetExternalLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetForeignConnection">ResetForeignConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetFunction">ResetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetMetastore">ResetMetastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetPipeline">ResetPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetRecipient">ResetRecipient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetShare">ResetShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetStorageCredential">ResetStorageCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetVolume">ResetVolume</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.grant.Grant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.grant.Grant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.grant.Grant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.grant.Grant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.grant.Grant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.grant.Grant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.grant.Grant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.grant.Grant.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.grant.Grant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.grant.Grant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.grant.Grant.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.grant.Grant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.grant.Grant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.grant.Grant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.grant.Grant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.grant.Grant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.grant.Grant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.grant.Grant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.grant.Grant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.grant.Grant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.grant.Grant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.grant.Grant.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.grant.Grant.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.grant.Grant.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.grant.Grant.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.grant.Grant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.grant.Grant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.grant.Grant.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.grant.Grant.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.grant.Grant.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.grant.Grant.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.grant.Grant.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.grant.Grant.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.grant.Grant.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktf/provider-databricks.grant.Grant.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetExternalLocation` <a name="ResetExternalLocation" id="@cdktf/provider-databricks.grant.Grant.resetExternalLocation"></a>

```go
func ResetExternalLocation()
```

##### `ResetForeignConnection` <a name="ResetForeignConnection" id="@cdktf/provider-databricks.grant.Grant.resetForeignConnection"></a>

```go
func ResetForeignConnection()
```

##### `ResetFunction` <a name="ResetFunction" id="@cdktf/provider-databricks.grant.Grant.resetFunction"></a>

```go
func ResetFunction()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.grant.Grant.resetId"></a>

```go
func ResetId()
```

##### `ResetMetastore` <a name="ResetMetastore" id="@cdktf/provider-databricks.grant.Grant.resetMetastore"></a>

```go
func ResetMetastore()
```

##### `ResetModel` <a name="ResetModel" id="@cdktf/provider-databricks.grant.Grant.resetModel"></a>

```go
func ResetModel()
```

##### `ResetPipeline` <a name="ResetPipeline" id="@cdktf/provider-databricks.grant.Grant.resetPipeline"></a>

```go
func ResetPipeline()
```

##### `ResetRecipient` <a name="ResetRecipient" id="@cdktf/provider-databricks.grant.Grant.resetRecipient"></a>

```go
func ResetRecipient()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-databricks.grant.Grant.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetShare` <a name="ResetShare" id="@cdktf/provider-databricks.grant.Grant.resetShare"></a>

```go
func ResetShare()
```

##### `ResetStorageCredential` <a name="ResetStorageCredential" id="@cdktf/provider-databricks.grant.Grant.resetStorageCredential"></a>

```go
func ResetStorageCredential()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-databricks.grant.Grant.resetTable"></a>

```go
func ResetTable()
```

##### `ResetVolume` <a name="ResetVolume" id="@cdktf/provider-databricks.grant.Grant.resetVolume"></a>

```go
func ResetVolume()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Grant resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.grant.Grant.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/grant"

grant.Grant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.grant.Grant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.grant.Grant.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/grant"

grant.Grant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.grant.Grant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.grant.Grant.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/grant"

grant.Grant_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.grant.Grant.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.grant.Grant.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/grant"

grant.Grant_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Grant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.grant.Grant.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.grant.Grant.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Grant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.grant.Grant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Grant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.grant.Grant.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Grant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.externalLocationInput">ExternalLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.foreignConnectionInput">ForeignConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.functionInput">FunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.metastoreInput">MetastoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.modelInput">ModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.pipelineInput">PipelineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.privilegesInput">PrivilegesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.recipientInput">RecipientInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.shareInput">ShareInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.storageCredentialInput">StorageCredentialInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.tableInput">TableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.volumeInput">VolumeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.externalLocation">ExternalLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.foreignConnection">ForeignConnection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.function">Function</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.metastore">Metastore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.pipeline">Pipeline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.privileges">Privileges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.recipient">Recipient</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.share">Share</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.storageCredential">StorageCredential</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.table">Table</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.volume">Volume</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.grant.Grant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.grant.Grant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.grant.Grant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.grant.Grant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.grant.Grant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.grant.Grant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.grant.Grant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.grant.Grant.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.grant.Grant.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.grant.Grant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.grant.Grant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.grant.Grant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.grant.Grant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.grant.Grant.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktf/provider-databricks.grant.Grant.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `ExternalLocationInput`<sup>Optional</sup> <a name="ExternalLocationInput" id="@cdktf/provider-databricks.grant.Grant.property.externalLocationInput"></a>

```go
func ExternalLocationInput() *string
```

- *Type:* *string

---

##### `ForeignConnectionInput`<sup>Optional</sup> <a name="ForeignConnectionInput" id="@cdktf/provider-databricks.grant.Grant.property.foreignConnectionInput"></a>

```go
func ForeignConnectionInput() *string
```

- *Type:* *string

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktf/provider-databricks.grant.Grant.property.functionInput"></a>

```go
func FunctionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.grant.Grant.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetastoreInput`<sup>Optional</sup> <a name="MetastoreInput" id="@cdktf/provider-databricks.grant.Grant.property.metastoreInput"></a>

```go
func MetastoreInput() *string
```

- *Type:* *string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktf/provider-databricks.grant.Grant.property.modelInput"></a>

```go
func ModelInput() *string
```

- *Type:* *string

---

##### `PipelineInput`<sup>Optional</sup> <a name="PipelineInput" id="@cdktf/provider-databricks.grant.Grant.property.pipelineInput"></a>

```go
func PipelineInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-databricks.grant.Grant.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `PrivilegesInput`<sup>Optional</sup> <a name="PrivilegesInput" id="@cdktf/provider-databricks.grant.Grant.property.privilegesInput"></a>

```go
func PrivilegesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RecipientInput`<sup>Optional</sup> <a name="RecipientInput" id="@cdktf/provider-databricks.grant.Grant.property.recipientInput"></a>

```go
func RecipientInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-databricks.grant.Grant.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `ShareInput`<sup>Optional</sup> <a name="ShareInput" id="@cdktf/provider-databricks.grant.Grant.property.shareInput"></a>

```go
func ShareInput() *string
```

- *Type:* *string

---

##### `StorageCredentialInput`<sup>Optional</sup> <a name="StorageCredentialInput" id="@cdktf/provider-databricks.grant.Grant.property.storageCredentialInput"></a>

```go
func StorageCredentialInput() *string
```

- *Type:* *string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-databricks.grant.Grant.property.tableInput"></a>

```go
func TableInput() *string
```

- *Type:* *string

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-databricks.grant.Grant.property.volumeInput"></a>

```go
func VolumeInput() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-databricks.grant.Grant.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `ExternalLocation`<sup>Required</sup> <a name="ExternalLocation" id="@cdktf/provider-databricks.grant.Grant.property.externalLocation"></a>

```go
func ExternalLocation() *string
```

- *Type:* *string

---

##### `ForeignConnection`<sup>Required</sup> <a name="ForeignConnection" id="@cdktf/provider-databricks.grant.Grant.property.foreignConnection"></a>

```go
func ForeignConnection() *string
```

- *Type:* *string

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-databricks.grant.Grant.property.function"></a>

```go
func Function() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.grant.Grant.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Metastore`<sup>Required</sup> <a name="Metastore" id="@cdktf/provider-databricks.grant.Grant.property.metastore"></a>

```go
func Metastore() *string
```

- *Type:* *string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktf/provider-databricks.grant.Grant.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `Pipeline`<sup>Required</sup> <a name="Pipeline" id="@cdktf/provider-databricks.grant.Grant.property.pipeline"></a>

```go
func Pipeline() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-databricks.grant.Grant.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktf/provider-databricks.grant.Grant.property.privileges"></a>

```go
func Privileges() *[]*string
```

- *Type:* *[]*string

---

##### `Recipient`<sup>Required</sup> <a name="Recipient" id="@cdktf/provider-databricks.grant.Grant.property.recipient"></a>

```go
func Recipient() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-databricks.grant.Grant.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `Share`<sup>Required</sup> <a name="Share" id="@cdktf/provider-databricks.grant.Grant.property.share"></a>

```go
func Share() *string
```

- *Type:* *string

---

##### `StorageCredential`<sup>Required</sup> <a name="StorageCredential" id="@cdktf/provider-databricks.grant.Grant.property.storageCredential"></a>

```go
func StorageCredential() *string
```

- *Type:* *string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-databricks.grant.Grant.property.table"></a>

```go
func Table() *string
```

- *Type:* *string

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-databricks.grant.Grant.property.volume"></a>

```go
func Volume() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.grant.Grant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GrantConfig <a name="GrantConfig" id="@cdktf/provider-databricks.grant.GrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.grant.GrantConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/grant"

&grant.GrantConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Principal: *string,
	Privileges: *[]*string,
	Catalog: *string,
	ExternalLocation: *string,
	ForeignConnection: *string,
	Function: *string,
	Id: *string,
	Metastore: *string,
	Model: *string,
	Pipeline: *string,
	Recipient: *string,
	Schema: *string,
	Share: *string,
	StorageCredential: *string,
	Table: *string,
	Volume: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.principal">Principal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#principal Grant#principal}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.privileges">Privileges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#privileges Grant#privileges}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.catalog">Catalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#catalog Grant#catalog}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.externalLocation">ExternalLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#external_location Grant#external_location}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.foreignConnection">ForeignConnection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#foreign_connection Grant#foreign_connection}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.function">Function</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#function Grant#function}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#id Grant#id}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.metastore">Metastore</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#metastore Grant#metastore}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.model">Model</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#model Grant#model}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.pipeline">Pipeline</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#pipeline Grant#pipeline}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.recipient">Recipient</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#recipient Grant#recipient}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.schema">Schema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#schema Grant#schema}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.share">Share</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#share Grant#share}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.storageCredential">StorageCredential</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#storage_credential Grant#storage_credential}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.table">Table</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#table Grant#table}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.volume">Volume</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#volume Grant#volume}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.grant.GrantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.grant.GrantConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.grant.GrantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.grant.GrantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.grant.GrantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.grant.GrantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.grant.GrantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-databricks.grant.GrantConfig.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#principal Grant#principal}.

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktf/provider-databricks.grant.GrantConfig.property.privileges"></a>

```go
Privileges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#privileges Grant#privileges}.

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktf/provider-databricks.grant.GrantConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#catalog Grant#catalog}.

---

##### `ExternalLocation`<sup>Optional</sup> <a name="ExternalLocation" id="@cdktf/provider-databricks.grant.GrantConfig.property.externalLocation"></a>

```go
ExternalLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#external_location Grant#external_location}.

---

##### `ForeignConnection`<sup>Optional</sup> <a name="ForeignConnection" id="@cdktf/provider-databricks.grant.GrantConfig.property.foreignConnection"></a>

```go
ForeignConnection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#foreign_connection Grant#foreign_connection}.

---

##### `Function`<sup>Optional</sup> <a name="Function" id="@cdktf/provider-databricks.grant.GrantConfig.property.function"></a>

```go
Function *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#function Grant#function}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.grant.GrantConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#id Grant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metastore`<sup>Optional</sup> <a name="Metastore" id="@cdktf/provider-databricks.grant.GrantConfig.property.metastore"></a>

```go
Metastore *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#metastore Grant#metastore}.

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktf/provider-databricks.grant.GrantConfig.property.model"></a>

```go
Model *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#model Grant#model}.

---

##### `Pipeline`<sup>Optional</sup> <a name="Pipeline" id="@cdktf/provider-databricks.grant.GrantConfig.property.pipeline"></a>

```go
Pipeline *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#pipeline Grant#pipeline}.

---

##### `Recipient`<sup>Optional</sup> <a name="Recipient" id="@cdktf/provider-databricks.grant.GrantConfig.property.recipient"></a>

```go
Recipient *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#recipient Grant#recipient}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-databricks.grant.GrantConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#schema Grant#schema}.

---

##### `Share`<sup>Optional</sup> <a name="Share" id="@cdktf/provider-databricks.grant.GrantConfig.property.share"></a>

```go
Share *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#share Grant#share}.

---

##### `StorageCredential`<sup>Optional</sup> <a name="StorageCredential" id="@cdktf/provider-databricks.grant.GrantConfig.property.storageCredential"></a>

```go
StorageCredential *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#storage_credential Grant#storage_credential}.

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-databricks.grant.GrantConfig.property.table"></a>

```go
Table *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#table Grant#table}.

---

##### `Volume`<sup>Optional</sup> <a name="Volume" id="@cdktf/provider-databricks.grant.GrantConfig.property.volume"></a>

```go
Volume *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.40.0/docs/resources/grant#volume Grant#volume}.

---



