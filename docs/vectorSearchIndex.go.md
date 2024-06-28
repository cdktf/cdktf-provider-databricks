# `vectorSearchIndex` Submodule <a name="`vectorSearchIndex` Submodule" id="@cdktf/provider-databricks.vectorSearchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VectorSearchIndex <a name="VectorSearchIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index databricks_vector_search_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndex(scope Construct, id *string, config VectorSearchIndexConfig) VectorSearchIndex
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig">VectorSearchIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig">VectorSearchIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDeltaSyncIndexSpec">PutDeltaSyncIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDirectAccessIndexSpec">PutDirectAccessIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetDeltaSyncIndexSpec">ResetDeltaSyncIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetDirectAccessIndexSpec">ResetDirectAccessIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeltaSyncIndexSpec` <a name="PutDeltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDeltaSyncIndexSpec"></a>

```go
func PutDeltaSyncIndexSpec(value VectorSearchIndexDeltaSyncIndexSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDeltaSyncIndexSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a>

---

##### `PutDirectAccessIndexSpec` <a name="PutDirectAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDirectAccessIndexSpec"></a>

```go
func PutDirectAccessIndexSpec(value VectorSearchIndexDirectAccessIndexSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putDirectAccessIndexSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putTimeouts"></a>

```go
func PutTimeouts(value VectorSearchIndexTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

---

##### `ResetDeltaSyncIndexSpec` <a name="ResetDeltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetDeltaSyncIndexSpec"></a>

```go
func ResetDeltaSyncIndexSpec()
```

##### `ResetDirectAccessIndexSpec` <a name="ResetDirectAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetDirectAccessIndexSpec"></a>

```go
func ResetDirectAccessIndexSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VectorSearchIndex resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

vectorsearchindex.VectorSearchIndex_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

vectorsearchindex.VectorSearchIndex_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

vectorsearchindex.VectorSearchIndex_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

vectorsearchindex.VectorSearchIndex_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VectorSearchIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VectorSearchIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VectorSearchIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VectorSearchIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.deltaSyncIndexSpec">DeltaSyncIndexSpec</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference">VectorSearchIndexDeltaSyncIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.directAccessIndexSpec">DirectAccessIndexSpec</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference">VectorSearchIndexDirectAccessIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.status">Status</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList">VectorSearchIndexStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference">VectorSearchIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.deltaSyncIndexSpecInput">DeltaSyncIndexSpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.directAccessIndexSpecInput">DirectAccessIndexSpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.indexTypeInput">IndexTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.indexType">IndexType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.primaryKey">PrimaryKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `DeltaSyncIndexSpec`<sup>Required</sup> <a name="DeltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.deltaSyncIndexSpec"></a>

```go
func DeltaSyncIndexSpec() VectorSearchIndexDeltaSyncIndexSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference">VectorSearchIndexDeltaSyncIndexSpecOutputReference</a>

---

##### `DirectAccessIndexSpec`<sup>Required</sup> <a name="DirectAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.directAccessIndexSpec"></a>

```go
func DirectAccessIndexSpec() VectorSearchIndexDirectAccessIndexSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference">VectorSearchIndexDirectAccessIndexSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.status"></a>

```go
func Status() VectorSearchIndexStatusList
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList">VectorSearchIndexStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.timeouts"></a>

```go
func Timeouts() VectorSearchIndexTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference">VectorSearchIndexTimeoutsOutputReference</a>

---

##### `DeltaSyncIndexSpecInput`<sup>Optional</sup> <a name="DeltaSyncIndexSpecInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.deltaSyncIndexSpecInput"></a>

```go
func DeltaSyncIndexSpecInput() VectorSearchIndexDeltaSyncIndexSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a>

---

##### `DirectAccessIndexSpecInput`<sup>Optional</sup> <a name="DirectAccessIndexSpecInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.directAccessIndexSpecInput"></a>

```go
func DirectAccessIndexSpecInput() VectorSearchIndexDirectAccessIndexSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a>

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexTypeInput`<sup>Optional</sup> <a name="IndexTypeInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.indexTypeInput"></a>

```go
func IndexTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.primaryKeyInput"></a>

```go
func PrimaryKeyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndexType`<sup>Required</sup> <a name="IndexType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.indexType"></a>

```go
func IndexType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.primaryKey"></a>

```go
func PrimaryKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndex.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VectorSearchIndexConfig <a name="VectorSearchIndexConfig" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

&vectorsearchindex.VectorSearchIndexConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EndpointName: *string,
	IndexType: *string,
	Name: *string,
	PrimaryKey: *string,
	DeltaSyncIndexSpec: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec,
	DirectAccessIndexSpec: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.vectorSearchIndex.VectorSearchIndexTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.endpointName">EndpointName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#endpoint_name VectorSearchIndex#endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.indexType">IndexType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#index_type VectorSearchIndex#index_type}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#name VectorSearchIndex#name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.primaryKey">PrimaryKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#primary_key VectorSearchIndex#primary_key}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.deltaSyncIndexSpec">DeltaSyncIndexSpec</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a></code> | delta_sync_index_spec block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.directAccessIndexSpec">DirectAccessIndexSpec</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a></code> | direct_access_index_spec block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#id VectorSearchIndex#id}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#endpoint_name VectorSearchIndex#endpoint_name}.

---

##### `IndexType`<sup>Required</sup> <a name="IndexType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.indexType"></a>

```go
IndexType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#index_type VectorSearchIndex#index_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.primaryKey"></a>

```go
PrimaryKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#primary_key VectorSearchIndex#primary_key}.

---

##### `DeltaSyncIndexSpec`<sup>Optional</sup> <a name="DeltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.deltaSyncIndexSpec"></a>

```go
DeltaSyncIndexSpec VectorSearchIndexDeltaSyncIndexSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a>

delta_sync_index_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#delta_sync_index_spec VectorSearchIndex#delta_sync_index_spec}

---

##### `DirectAccessIndexSpec`<sup>Optional</sup> <a name="DirectAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.directAccessIndexSpec"></a>

```go
DirectAccessIndexSpec VectorSearchIndexDirectAccessIndexSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a>

direct_access_index_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#direct_access_index_spec VectorSearchIndex#direct_access_index_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#id VectorSearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexConfig.property.timeouts"></a>

```go
Timeouts VectorSearchIndexTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#timeouts VectorSearchIndex#timeouts}

---

### VectorSearchIndexDeltaSyncIndexSpec <a name="VectorSearchIndexDeltaSyncIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

&vectorsearchindex.VectorSearchIndexDeltaSyncIndexSpec {
	EmbeddingSourceColumns: interface{},
	EmbeddingVectorColumns: interface{},
	EmbeddingWritebackTable: *string,
	PipelineType: *string,
	SourceTable: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code>interface{}</code> | embedding_source_columns block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code>interface{}</code> | embedding_vector_columns block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingWritebackTable">EmbeddingWritebackTable</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#embedding_writeback_table VectorSearchIndex#embedding_writeback_table}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.pipelineType">PipelineType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#pipeline_type VectorSearchIndex#pipeline_type}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.sourceTable">SourceTable</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#source_table VectorSearchIndex#source_table}. |

---

##### `EmbeddingSourceColumns`<sup>Optional</sup> <a name="EmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingSourceColumns"></a>

```go
EmbeddingSourceColumns interface{}
```

- *Type:* interface{}

embedding_source_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#embedding_source_columns VectorSearchIndex#embedding_source_columns}

---

##### `EmbeddingVectorColumns`<sup>Optional</sup> <a name="EmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingVectorColumns"></a>

```go
EmbeddingVectorColumns interface{}
```

- *Type:* interface{}

embedding_vector_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#embedding_vector_columns VectorSearchIndex#embedding_vector_columns}

---

##### `EmbeddingWritebackTable`<sup>Optional</sup> <a name="EmbeddingWritebackTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.embeddingWritebackTable"></a>

```go
EmbeddingWritebackTable *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#embedding_writeback_table VectorSearchIndex#embedding_writeback_table}.

---

##### `PipelineType`<sup>Optional</sup> <a name="PipelineType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.pipelineType"></a>

```go
PipelineType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#pipeline_type VectorSearchIndex#pipeline_type}.

---

##### `SourceTable`<sup>Optional</sup> <a name="SourceTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec.property.sourceTable"></a>

```go
SourceTable *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#source_table VectorSearchIndex#source_table}.

---

### VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

&vectorsearchindex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns {
	EmbeddingModelEndpointName: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpointName">EmbeddingModelEndpointName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#embedding_model_endpoint_name VectorSearchIndex#embedding_model_endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#name VectorSearchIndex#name}. |

---

##### `EmbeddingModelEndpointName`<sup>Optional</sup> <a name="EmbeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpointName"></a>

```go
EmbeddingModelEndpointName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#embedding_model_endpoint_name VectorSearchIndex#embedding_model_endpoint_name}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

### VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

&vectorsearchindex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns {
	EmbeddingDimension: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension">EmbeddingDimension</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#embedding_dimension VectorSearchIndex#embedding_dimension}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#name VectorSearchIndex#name}. |

---

##### `EmbeddingDimension`<sup>Optional</sup> <a name="EmbeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```go
EmbeddingDimension *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#embedding_dimension VectorSearchIndex#embedding_dimension}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

### VectorSearchIndexDirectAccessIndexSpec <a name="VectorSearchIndexDirectAccessIndexSpec" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

&vectorsearchindex.VectorSearchIndexDirectAccessIndexSpec {
	EmbeddingSourceColumns: interface{},
	EmbeddingVectorColumns: interface{},
	SchemaJson: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code>interface{}</code> | embedding_source_columns block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code>interface{}</code> | embedding_vector_columns block. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.schemaJson">SchemaJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#schema_json VectorSearchIndex#schema_json}. |

---

##### `EmbeddingSourceColumns`<sup>Optional</sup> <a name="EmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.embeddingSourceColumns"></a>

```go
EmbeddingSourceColumns interface{}
```

- *Type:* interface{}

embedding_source_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#embedding_source_columns VectorSearchIndex#embedding_source_columns}

---

##### `EmbeddingVectorColumns`<sup>Optional</sup> <a name="EmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.embeddingVectorColumns"></a>

```go
EmbeddingVectorColumns interface{}
```

- *Type:* interface{}

embedding_vector_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#embedding_vector_columns VectorSearchIndex#embedding_vector_columns}

---

##### `SchemaJson`<sup>Optional</sup> <a name="SchemaJson" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec.property.schemaJson"></a>

```go
SchemaJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#schema_json VectorSearchIndex#schema_json}.

---

### VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

&vectorsearchindex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns {
	EmbeddingModelEndpointName: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpointName">EmbeddingModelEndpointName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#embedding_model_endpoint_name VectorSearchIndex#embedding_model_endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#name VectorSearchIndex#name}. |

---

##### `EmbeddingModelEndpointName`<sup>Optional</sup> <a name="EmbeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpointName"></a>

```go
EmbeddingModelEndpointName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#embedding_model_endpoint_name VectorSearchIndex#embedding_model_endpoint_name}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

### VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

&vectorsearchindex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns {
	EmbeddingDimension: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension">EmbeddingDimension</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#embedding_dimension VectorSearchIndex#embedding_dimension}. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#name VectorSearchIndex#name}. |

---

##### `EmbeddingDimension`<sup>Optional</sup> <a name="EmbeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```go
EmbeddingDimension *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#embedding_dimension VectorSearchIndex#embedding_dimension}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#name VectorSearchIndex#name}.

---

### VectorSearchIndexStatus <a name="VectorSearchIndexStatus" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

&vectorsearchindex.VectorSearchIndexStatus {

}
```


### VectorSearchIndexTimeouts <a name="VectorSearchIndexTimeouts" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

&vectorsearchindex.VectorSearchIndexTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#create VectorSearchIndex#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/resources/vector_search_index#create VectorSearchIndex#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get"></a>

```go
func Get(index *f64) VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpointName">ResetEmbeddingModelEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingModelEndpointName` <a name="ResetEmbeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpointName"></a>

```go
func ResetEmbeddingModelEndpointName()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointNameInput">EmbeddingModelEndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointName">EmbeddingModelEndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmbeddingModelEndpointNameInput`<sup>Optional</sup> <a name="EmbeddingModelEndpointNameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointNameInput"></a>

```go
func EmbeddingModelEndpointNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `EmbeddingModelEndpointName`<sup>Required</sup> <a name="EmbeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointName"></a>

```go
func EmbeddingModelEndpointName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get"></a>

```go
func Get(index *f64) VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference <a name="VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">ResetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingDimension` <a name="ResetEmbeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```go
func ResetEmbeddingDimension()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">EmbeddingDimensionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">EmbeddingDimension</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmbeddingDimensionInput`<sup>Optional</sup> <a name="EmbeddingDimensionInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```go
func EmbeddingDimensionInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `EmbeddingDimension`<sup>Required</sup> <a name="EmbeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```go
func EmbeddingDimension() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VectorSearchIndexDeltaSyncIndexSpecOutputReference <a name="VectorSearchIndexDeltaSyncIndexSpecOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndexDeltaSyncIndexSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VectorSearchIndexDeltaSyncIndexSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns">PutEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns">PutEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns">ResetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns">ResetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable">ResetEmbeddingWritebackTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetPipelineType">ResetPipelineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetSourceTable">ResetSourceTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEmbeddingSourceColumns` <a name="PutEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```go
func PutEmbeddingSourceColumns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEmbeddingVectorColumns` <a name="PutEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```go
func PutEmbeddingVectorColumns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEmbeddingSourceColumns` <a name="ResetEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```go
func ResetEmbeddingSourceColumns()
```

##### `ResetEmbeddingVectorColumns` <a name="ResetEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```go
func ResetEmbeddingVectorColumns()
```

##### `ResetEmbeddingWritebackTable` <a name="ResetEmbeddingWritebackTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable"></a>

```go
func ResetEmbeddingWritebackTable()
```

##### `ResetPipelineType` <a name="ResetPipelineType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetPipelineType"></a>

```go
func ResetPipelineType()
```

##### `ResetSourceTable` <a name="ResetSourceTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.resetSourceTable"></a>

```go
func ResetSourceTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput">EmbeddingSourceColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput">EmbeddingVectorColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput">EmbeddingWritebackTableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput">PipelineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTableInput">SourceTableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable">EmbeddingWritebackTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineType">PipelineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTable">SourceTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmbeddingSourceColumns`<sup>Required</sup> <a name="EmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```go
func EmbeddingSourceColumns() VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList">VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList</a>

---

##### `EmbeddingVectorColumns`<sup>Required</sup> <a name="EmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```go
func EmbeddingVectorColumns() VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList">VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList</a>

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `EmbeddingSourceColumnsInput`<sup>Optional</sup> <a name="EmbeddingSourceColumnsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```go
func EmbeddingSourceColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `EmbeddingVectorColumnsInput`<sup>Optional</sup> <a name="EmbeddingVectorColumnsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```go
func EmbeddingVectorColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `EmbeddingWritebackTableInput`<sup>Optional</sup> <a name="EmbeddingWritebackTableInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput"></a>

```go
func EmbeddingWritebackTableInput() *string
```

- *Type:* *string

---

##### `PipelineTypeInput`<sup>Optional</sup> <a name="PipelineTypeInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput"></a>

```go
func PipelineTypeInput() *string
```

- *Type:* *string

---

##### `SourceTableInput`<sup>Optional</sup> <a name="SourceTableInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTableInput"></a>

```go
func SourceTableInput() *string
```

- *Type:* *string

---

##### `EmbeddingWritebackTable`<sup>Required</sup> <a name="EmbeddingWritebackTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable"></a>

```go
func EmbeddingWritebackTable() *string
```

- *Type:* *string

---

##### `PipelineType`<sup>Required</sup> <a name="PipelineType" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineType"></a>

```go
func PipelineType() *string
```

- *Type:* *string

---

##### `SourceTable`<sup>Required</sup> <a name="SourceTable" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTable"></a>

```go
func SourceTable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VectorSearchIndexDeltaSyncIndexSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDeltaSyncIndexSpec">VectorSearchIndexDeltaSyncIndexSpec</a>

---


### VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get"></a>

```go
func Get(index *f64) VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpointName">ResetEmbeddingModelEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingModelEndpointName` <a name="ResetEmbeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpointName"></a>

```go
func ResetEmbeddingModelEndpointName()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointNameInput">EmbeddingModelEndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointName">EmbeddingModelEndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmbeddingModelEndpointNameInput`<sup>Optional</sup> <a name="EmbeddingModelEndpointNameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointNameInput"></a>

```go
func EmbeddingModelEndpointNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `EmbeddingModelEndpointName`<sup>Required</sup> <a name="EmbeddingModelEndpointName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointName"></a>

```go
func EmbeddingModelEndpointName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get"></a>

```go
func Get(index *f64) VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference <a name="VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">ResetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingDimension` <a name="ResetEmbeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```go
func ResetEmbeddingDimension()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">EmbeddingDimensionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">EmbeddingDimension</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmbeddingDimensionInput`<sup>Optional</sup> <a name="EmbeddingDimensionInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```go
func EmbeddingDimensionInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `EmbeddingDimension`<sup>Required</sup> <a name="EmbeddingDimension" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```go
func EmbeddingDimension() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VectorSearchIndexDirectAccessIndexSpecOutputReference <a name="VectorSearchIndexDirectAccessIndexSpecOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndexDirectAccessIndexSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VectorSearchIndexDirectAccessIndexSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns">PutEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns">PutEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns">ResetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns">ResetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetSchemaJson">ResetSchemaJson</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEmbeddingSourceColumns` <a name="PutEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```go
func PutEmbeddingSourceColumns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEmbeddingVectorColumns` <a name="PutEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```go
func PutEmbeddingVectorColumns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEmbeddingSourceColumns` <a name="ResetEmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```go
func ResetEmbeddingSourceColumns()
```

##### `ResetEmbeddingVectorColumns` <a name="ResetEmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```go
func ResetEmbeddingVectorColumns()
```

##### `ResetSchemaJson` <a name="ResetSchemaJson" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.resetSchemaJson"></a>

```go
func ResetSchemaJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput">EmbeddingSourceColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput">EmbeddingVectorColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJsonInput">SchemaJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJson">SchemaJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmbeddingSourceColumns`<sup>Required</sup> <a name="EmbeddingSourceColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```go
func EmbeddingSourceColumns() VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList">VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList</a>

---

##### `EmbeddingVectorColumns`<sup>Required</sup> <a name="EmbeddingVectorColumns" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```go
func EmbeddingVectorColumns() VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList">VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList</a>

---

##### `EmbeddingSourceColumnsInput`<sup>Optional</sup> <a name="EmbeddingSourceColumnsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```go
func EmbeddingSourceColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `EmbeddingVectorColumnsInput`<sup>Optional</sup> <a name="EmbeddingVectorColumnsInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```go
func EmbeddingVectorColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaJsonInput`<sup>Optional</sup> <a name="SchemaJsonInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJsonInput"></a>

```go
func SchemaJsonInput() *string
```

- *Type:* *string

---

##### `SchemaJson`<sup>Required</sup> <a name="SchemaJson" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJson"></a>

```go
func SchemaJson() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VectorSearchIndexDirectAccessIndexSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexDirectAccessIndexSpec">VectorSearchIndexDirectAccessIndexSpec</a>

---


### VectorSearchIndexStatusList <a name="VectorSearchIndexStatusList" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndexStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VectorSearchIndexStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.get"></a>

```go
func Get(index *f64) VectorSearchIndexStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VectorSearchIndexStatusOutputReference <a name="VectorSearchIndexStatusOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndexStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VectorSearchIndexStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.indexedRowCount">IndexedRowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.indexUrl">IndexUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.ready">Ready</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatus">VectorSearchIndexStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexedRowCount`<sup>Required</sup> <a name="IndexedRowCount" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.indexedRowCount"></a>

```go
func IndexedRowCount() *f64
```

- *Type:* *f64

---

##### `IndexUrl`<sup>Required</sup> <a name="IndexUrl" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.indexUrl"></a>

```go
func IndexUrl() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Ready`<sup>Required</sup> <a name="Ready" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.ready"></a>

```go
func Ready() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() VectorSearchIndexStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexStatus">VectorSearchIndexStatus</a>

---


### VectorSearchIndexTimeoutsOutputReference <a name="VectorSearchIndexTimeoutsOutputReference" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndexTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VectorSearchIndexTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



