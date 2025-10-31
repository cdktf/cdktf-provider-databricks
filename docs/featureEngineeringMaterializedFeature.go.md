# `featureEngineeringMaterializedFeature` Submodule <a name="`featureEngineeringMaterializedFeature` Submodule" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureEngineeringMaterializedFeature <a name="FeatureEngineeringMaterializedFeature" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature databricks_feature_engineering_materialized_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringmaterializedfeature"

featureengineeringmaterializedfeature.NewFeatureEngineeringMaterializedFeature(scope Construct, id *string, config FeatureEngineeringMaterializedFeatureConfig) FeatureEngineeringMaterializedFeature
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig">FeatureEngineeringMaterializedFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig">FeatureEngineeringMaterializedFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOfflineStoreConfig">PutOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOnlineStoreConfig">PutOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOfflineStoreConfig">ResetOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOnlineStoreConfig">ResetOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetPipelineScheduleState">ResetPipelineScheduleState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOfflineStoreConfig` <a name="PutOfflineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOfflineStoreConfig"></a>

```go
func PutOfflineStoreConfig(value FeatureEngineeringMaterializedFeatureOfflineStoreConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOfflineStoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a>

---

##### `PutOnlineStoreConfig` <a name="PutOnlineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOnlineStoreConfig"></a>

```go
func PutOnlineStoreConfig(value FeatureEngineeringMaterializedFeatureOnlineStoreConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOnlineStoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a>

---

##### `ResetOfflineStoreConfig` <a name="ResetOfflineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOfflineStoreConfig"></a>

```go
func ResetOfflineStoreConfig()
```

##### `ResetOnlineStoreConfig` <a name="ResetOnlineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOnlineStoreConfig"></a>

```go
func ResetOnlineStoreConfig()
```

##### `ResetPipelineScheduleState` <a name="ResetPipelineScheduleState" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetPipelineScheduleState"></a>

```go
func ResetPipelineScheduleState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FeatureEngineeringMaterializedFeature resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringmaterializedfeature"

featureengineeringmaterializedfeature.FeatureEngineeringMaterializedFeature_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringmaterializedfeature"

featureengineeringmaterializedfeature.FeatureEngineeringMaterializedFeature_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringmaterializedfeature"

featureengineeringmaterializedfeature.FeatureEngineeringMaterializedFeature_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringmaterializedfeature"

featureengineeringmaterializedfeature.FeatureEngineeringMaterializedFeature_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FeatureEngineeringMaterializedFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FeatureEngineeringMaterializedFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FeatureEngineeringMaterializedFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FeatureEngineeringMaterializedFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.lastMaterializationTime">LastMaterializationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.materializedFeatureId">MaterializedFeatureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.offlineStoreConfig">OfflineStoreConfig</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference">FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.onlineStoreConfig">OnlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference">FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.featureNameInput">FeatureNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.offlineStoreConfigInput">OfflineStoreConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.onlineStoreConfigInput">OnlineStoreConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.pipelineScheduleStateInput">PipelineScheduleStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.featureName">FeatureName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.pipelineScheduleState">PipelineScheduleState</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LastMaterializationTime`<sup>Required</sup> <a name="LastMaterializationTime" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.lastMaterializationTime"></a>

```go
func LastMaterializationTime() *string
```

- *Type:* *string

---

##### `MaterializedFeatureId`<sup>Required</sup> <a name="MaterializedFeatureId" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.materializedFeatureId"></a>

```go
func MaterializedFeatureId() *string
```

- *Type:* *string

---

##### `OfflineStoreConfig`<sup>Required</sup> <a name="OfflineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.offlineStoreConfig"></a>

```go
func OfflineStoreConfig() FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference">FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference</a>

---

##### `OnlineStoreConfig`<sup>Required</sup> <a name="OnlineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.onlineStoreConfig"></a>

```go
func OnlineStoreConfig() FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference">FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference</a>

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `FeatureNameInput`<sup>Optional</sup> <a name="FeatureNameInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.featureNameInput"></a>

```go
func FeatureNameInput() *string
```

- *Type:* *string

---

##### `OfflineStoreConfigInput`<sup>Optional</sup> <a name="OfflineStoreConfigInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.offlineStoreConfigInput"></a>

```go
func OfflineStoreConfigInput() interface{}
```

- *Type:* interface{}

---

##### `OnlineStoreConfigInput`<sup>Optional</sup> <a name="OnlineStoreConfigInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.onlineStoreConfigInput"></a>

```go
func OnlineStoreConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PipelineScheduleStateInput`<sup>Optional</sup> <a name="PipelineScheduleStateInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.pipelineScheduleStateInput"></a>

```go
func PipelineScheduleStateInput() *string
```

- *Type:* *string

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.featureName"></a>

```go
func FeatureName() *string
```

- *Type:* *string

---

##### `PipelineScheduleState`<sup>Required</sup> <a name="PipelineScheduleState" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.pipelineScheduleState"></a>

```go
func PipelineScheduleState() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureEngineeringMaterializedFeatureConfig <a name="FeatureEngineeringMaterializedFeatureConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringmaterializedfeature"

&featureengineeringmaterializedfeature.FeatureEngineeringMaterializedFeatureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FeatureName: *string,
	OfflineStoreConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig,
	OnlineStoreConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig,
	PipelineScheduleState: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.featureName">FeatureName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#feature_name FeatureEngineeringMaterializedFeature#feature_name}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.offlineStoreConfig">OfflineStoreConfig</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#offline_store_config FeatureEngineeringMaterializedFeature#offline_store_config}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.onlineStoreConfig">OnlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#online_store_config FeatureEngineeringMaterializedFeature#online_store_config}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.pipelineScheduleState">PipelineScheduleState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#pipeline_schedule_state FeatureEngineeringMaterializedFeature#pipeline_schedule_state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.featureName"></a>

```go
FeatureName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#feature_name FeatureEngineeringMaterializedFeature#feature_name}.

---

##### `OfflineStoreConfig`<sup>Optional</sup> <a name="OfflineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.offlineStoreConfig"></a>

```go
OfflineStoreConfig FeatureEngineeringMaterializedFeatureOfflineStoreConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#offline_store_config FeatureEngineeringMaterializedFeature#offline_store_config}.

---

##### `OnlineStoreConfig`<sup>Optional</sup> <a name="OnlineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.onlineStoreConfig"></a>

```go
OnlineStoreConfig FeatureEngineeringMaterializedFeatureOnlineStoreConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#online_store_config FeatureEngineeringMaterializedFeature#online_store_config}.

---

##### `PipelineScheduleState`<sup>Optional</sup> <a name="PipelineScheduleState" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.pipelineScheduleState"></a>

```go
PipelineScheduleState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#pipeline_schedule_state FeatureEngineeringMaterializedFeature#pipeline_schedule_state}.

---

### FeatureEngineeringMaterializedFeatureOfflineStoreConfig <a name="FeatureEngineeringMaterializedFeatureOfflineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringmaterializedfeature"

&featureengineeringmaterializedfeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig {
	CatalogName: *string,
	SchemaName: *string,
	TableNamePrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#catalog_name FeatureEngineeringMaterializedFeature#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#schema_name FeatureEngineeringMaterializedFeature#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.tableNamePrefix">TableNamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#table_name_prefix FeatureEngineeringMaterializedFeature#table_name_prefix}. |

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#catalog_name FeatureEngineeringMaterializedFeature#catalog_name}.

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#schema_name FeatureEngineeringMaterializedFeature#schema_name}.

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.tableNamePrefix"></a>

```go
TableNamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#table_name_prefix FeatureEngineeringMaterializedFeature#table_name_prefix}.

---

### FeatureEngineeringMaterializedFeatureOnlineStoreConfig <a name="FeatureEngineeringMaterializedFeatureOnlineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringmaterializedfeature"

&featureengineeringmaterializedfeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig {
	Capacity: *string,
	Name: *string,
	ReadReplicaCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.capacity">Capacity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#capacity FeatureEngineeringMaterializedFeature#capacity}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#name FeatureEngineeringMaterializedFeature#name}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.readReplicaCount">ReadReplicaCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#read_replica_count FeatureEngineeringMaterializedFeature#read_replica_count}. |

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.capacity"></a>

```go
Capacity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#capacity FeatureEngineeringMaterializedFeature#capacity}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#name FeatureEngineeringMaterializedFeature#name}.

---

##### `ReadReplicaCount`<sup>Optional</sup> <a name="ReadReplicaCount" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.readReplicaCount"></a>

```go
ReadReplicaCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#read_replica_count FeatureEngineeringMaterializedFeature#read_replica_count}.

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference <a name="FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringmaterializedfeature"

featureengineeringmaterializedfeature.NewFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefixInput">TableNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefix">TableNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `TableNamePrefixInput`<sup>Optional</sup> <a name="TableNamePrefixInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefixInput"></a>

```go
func TableNamePrefixInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefix"></a>

```go
func TableNamePrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference <a name="FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/featureengineeringmaterializedfeature"

featureengineeringmaterializedfeature.NewFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resetReadReplicaCount">ResetReadReplicaCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadReplicaCount` <a name="ResetReadReplicaCount" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resetReadReplicaCount"></a>

```go
func ResetReadReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.capacityInput">CapacityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.readReplicaCountInput">ReadReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.capacity">Capacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.readReplicaCount">ReadReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.capacityInput"></a>

```go
func CapacityInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReadReplicaCountInput`<sup>Optional</sup> <a name="ReadReplicaCountInput" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.readReplicaCountInput"></a>

```go
func ReadReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.capacity"></a>

```go
func Capacity() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReadReplicaCount`<sup>Required</sup> <a name="ReadReplicaCount" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.readReplicaCount"></a>

```go
func ReadReplicaCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



