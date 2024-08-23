# `azureBlobMount` Submodule <a name="`azureBlobMount` Submodule" id="@cdktf/provider-databricks.azureBlobMount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureBlobMount <a name="AzureBlobMount" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount databricks_azure_blob_mount}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/azureblobmount"

azureblobmount.NewAzureBlobMount(scope Construct, id *string, config AzureBlobMountConfig) AzureBlobMount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig">AzureBlobMountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig">AzureBlobMountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetClusterId"></a>

```go
func ResetClusterId()
```

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetDirectory"></a>

```go
func ResetDirectory()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AzureBlobMount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/azureblobmount"

azureblobmount.AzureBlobMount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/azureblobmount"

azureblobmount.AzureBlobMount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/azureblobmount"

azureblobmount.AzureBlobMount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/azureblobmount"

azureblobmount.AzureBlobMount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AzureBlobMount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AzureBlobMount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AzureBlobMount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AzureBlobMount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerNameInput">ContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directoryInput">DirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountNameInput">MountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKeyInput">TokenSecretKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScopeInput">TokenSecretScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directory">Directory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountName">MountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountName">StorageAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKey">TokenSecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScope">TokenSecretScope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerNameInput"></a>

```go
func ContainerNameInput() *string
```

- *Type:* *string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directoryInput"></a>

```go
func DirectoryInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MountNameInput`<sup>Optional</sup> <a name="MountNameInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountNameInput"></a>

```go
func MountNameInput() *string
```

- *Type:* *string

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountNameInput"></a>

```go
func StorageAccountNameInput() *string
```

- *Type:* *string

---

##### `TokenSecretKeyInput`<sup>Optional</sup> <a name="TokenSecretKeyInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKeyInput"></a>

```go
func TokenSecretKeyInput() *string
```

- *Type:* *string

---

##### `TokenSecretScopeInput`<sup>Optional</sup> <a name="TokenSecretScopeInput" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScopeInput"></a>

```go
func TokenSecretScopeInput() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.directory"></a>

```go
func Directory() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MountName`<sup>Required</sup> <a name="MountName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.mountName"></a>

```go
func MountName() *string
```

- *Type:* *string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.storageAccountName"></a>

```go
func StorageAccountName() *string
```

- *Type:* *string

---

##### `TokenSecretKey`<sup>Required</sup> <a name="TokenSecretKey" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretKey"></a>

```go
func TokenSecretKey() *string
```

- *Type:* *string

---

##### `TokenSecretScope`<sup>Required</sup> <a name="TokenSecretScope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tokenSecretScope"></a>

```go
func TokenSecretScope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureBlobMountConfig <a name="AzureBlobMountConfig" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/azureblobmount"

&azureblobmount.AzureBlobMountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthType: *string,
	ContainerName: *string,
	MountName: *string,
	StorageAccountName: *string,
	TokenSecretKey: *string,
	TokenSecretScope: *string,
	ClusterId: *string,
	Directory: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.authType">AuthType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#auth_type AzureBlobMount#auth_type}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.containerName">ContainerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#container_name AzureBlobMount#container_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.mountName">MountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#mount_name AzureBlobMount#mount_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.storageAccountName">StorageAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#storage_account_name AzureBlobMount#storage_account_name}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretKey">TokenSecretKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#token_secret_key AzureBlobMount#token_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretScope">TokenSecretScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#token_secret_scope AzureBlobMount#token_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#cluster_id AzureBlobMount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.directory">Directory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#directory AzureBlobMount#directory}. |
| <code><a href="#@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#id AzureBlobMount#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#auth_type AzureBlobMount#auth_type}.

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.containerName"></a>

```go
ContainerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#container_name AzureBlobMount#container_name}.

---

##### `MountName`<sup>Required</sup> <a name="MountName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.mountName"></a>

```go
MountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#mount_name AzureBlobMount#mount_name}.

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.storageAccountName"></a>

```go
StorageAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#storage_account_name AzureBlobMount#storage_account_name}.

---

##### `TokenSecretKey`<sup>Required</sup> <a name="TokenSecretKey" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretKey"></a>

```go
TokenSecretKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#token_secret_key AzureBlobMount#token_secret_key}.

---

##### `TokenSecretScope`<sup>Required</sup> <a name="TokenSecretScope" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.tokenSecretScope"></a>

```go
TokenSecretScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#token_secret_scope AzureBlobMount#token_secret_scope}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#cluster_id AzureBlobMount#cluster_id}.

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.directory"></a>

```go
Directory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#directory AzureBlobMount#directory}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.azureBlobMount.AzureBlobMountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/azure_blob_mount#id AzureBlobMount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



