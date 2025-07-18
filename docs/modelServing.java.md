# `modelServing` Submodule <a name="`modelServing` Submodule" id="@cdktf/provider-databricks.modelServing"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ModelServing <a name="ModelServing" id="@cdktf/provider-databricks.modelServing.ModelServing"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving databricks_model_serving}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServing;

ModelServing.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .aiGateway(ModelServingAiGateway)
//  .budgetPolicyId(java.lang.String)
//  .config(ModelServingConfigA)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .rateLimits(IResolvable)
//  .rateLimits(java.util.List<ModelServingRateLimits>)
//  .routeOptimized(java.lang.Boolean)
//  .routeOptimized(IResolvable)
//  .tags(IResolvable)
//  .tags(java.util.List<ModelServingTags>)
//  .timeouts(ModelServingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.aiGateway">aiGateway</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a></code> | ai_gateway block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.budgetPolicyId">budgetPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#budget_policy_id ModelServing#budget_policy_id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#description ModelServing#description}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#id ModelServing#id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.rateLimits">rateLimits</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>></code> | rate_limits block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.routeOptimized">routeOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#route_optimized ModelServing#route_optimized}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `aiGateway`<sup>Optional</sup> <a name="aiGateway" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.aiGateway"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a>

ai_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#ai_gateway ModelServing#ai_gateway}

---

##### `budgetPolicyId`<sup>Optional</sup> <a name="budgetPolicyId" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.budgetPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#budget_policy_id ModelServing#budget_policy_id}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#config ModelServing#config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#description ModelServing#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#id ModelServing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.rateLimits"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>>

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#rate_limits ModelServing#rate_limits}

---

##### `routeOptimized`<sup>Optional</sup> <a name="routeOptimized" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.routeOptimized"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#route_optimized ModelServing#route_optimized}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#tags ModelServing#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#timeouts ModelServing#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putAiGateway">putAiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putRateLimits">putRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetAiGateway">resetAiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetBudgetPolicyId">resetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetRateLimits">resetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetRouteOptimized">resetRouteOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServing.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.modelServing.ModelServing.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.modelServing.ModelServing.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.modelServing.ModelServing.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.modelServing.ModelServing.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.modelServing.ModelServing.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.modelServing.ModelServing.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.modelServing.ModelServing.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.modelServing.ModelServing.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.modelServing.ModelServing.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.modelServing.ModelServing.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.modelServing.ModelServing.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.modelServing.ModelServing.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServing.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.modelServing.ModelServing.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.modelServing.ModelServing.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.modelServing.ModelServing.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServing.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.modelServing.ModelServing.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAiGateway` <a name="putAiGateway" id="@cdktf/provider-databricks.modelServing.ModelServing.putAiGateway"></a>

```java
public void putAiGateway(ModelServingAiGateway value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putAiGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a>

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-databricks.modelServing.ModelServing.putConfig"></a>

```java
public void putConfig(ModelServingConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

---

##### `putRateLimits` <a name="putRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServing.putRateLimits"></a>

```java
public void putRateLimits(IResolvable OR java.util.List<ModelServingRateLimits> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putRateLimits.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-databricks.modelServing.ModelServing.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<ModelServingTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts"></a>

```java
public void putTimeouts(ModelServingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

---

##### `resetAiGateway` <a name="resetAiGateway" id="@cdktf/provider-databricks.modelServing.ModelServing.resetAiGateway"></a>

```java
public void resetAiGateway()
```

##### `resetBudgetPolicyId` <a name="resetBudgetPolicyId" id="@cdktf/provider-databricks.modelServing.ModelServing.resetBudgetPolicyId"></a>

```java
public void resetBudgetPolicyId()
```

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-databricks.modelServing.ModelServing.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.modelServing.ModelServing.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.modelServing.ModelServing.resetId"></a>

```java
public void resetId()
```

##### `resetRateLimits` <a name="resetRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServing.resetRateLimits"></a>

```java
public void resetRateLimits()
```

##### `resetRouteOptimized` <a name="resetRouteOptimized" id="@cdktf/provider-databricks.modelServing.ModelServing.resetRouteOptimized"></a>

```java
public void resetRouteOptimized()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-databricks.modelServing.ModelServing.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ModelServing resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.modelServing.ModelServing.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServing;

ModelServing.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServing.ModelServing.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServing;

ModelServing.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServing;

ModelServing.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServing;

ModelServing.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ModelServing.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ModelServing resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ModelServing to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ModelServing that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ModelServing to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.aiGateway">aiGateway</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference">ModelServingAiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference">ModelServingConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.rateLimits">rateLimits</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList">ModelServingRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.servingEndpointId">servingEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList">ModelServingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference">ModelServingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.aiGatewayInput">aiGatewayInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.budgetPolicyIdInput">budgetPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.rateLimitsInput">rateLimitsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.routeOptimizedInput">routeOptimizedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.budgetPolicyId">budgetPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.routeOptimized">routeOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.modelServing.ModelServing.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.modelServing.ModelServing.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServing.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.modelServing.ModelServing.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.modelServing.ModelServing.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.modelServing.ModelServing.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.modelServing.ModelServing.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.modelServing.ModelServing.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.modelServing.ModelServing.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.modelServing.ModelServing.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.modelServing.ModelServing.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.modelServing.ModelServing.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServing.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.modelServing.ModelServing.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aiGateway`<sup>Required</sup> <a name="aiGateway" id="@cdktf/provider-databricks.modelServing.ModelServing.property.aiGateway"></a>

```java
public ModelServingAiGatewayOutputReference getAiGateway();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference">ModelServingAiGatewayOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.modelServing.ModelServing.property.config"></a>

```java
public ModelServingConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference">ModelServingConfigAOutputReference</a>

---

##### `rateLimits`<sup>Required</sup> <a name="rateLimits" id="@cdktf/provider-databricks.modelServing.ModelServing.property.rateLimits"></a>

```java
public ModelServingRateLimitsList getRateLimits();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList">ModelServingRateLimitsList</a>

---

##### `servingEndpointId`<sup>Required</sup> <a name="servingEndpointId" id="@cdktf/provider-databricks.modelServing.ModelServing.property.servingEndpointId"></a>

```java
public java.lang.String getServingEndpointId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.modelServing.ModelServing.property.tags"></a>

```java
public ModelServingTagsList getTags();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList">ModelServingTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.property.timeouts"></a>

```java
public ModelServingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference">ModelServingTimeoutsOutputReference</a>

---

##### `aiGatewayInput`<sup>Optional</sup> <a name="aiGatewayInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.aiGatewayInput"></a>

```java
public ModelServingAiGateway getAiGatewayInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a>

---

##### `budgetPolicyIdInput`<sup>Optional</sup> <a name="budgetPolicyIdInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.budgetPolicyIdInput"></a>

```java
public java.lang.String getBudgetPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.configInput"></a>

```java
public ModelServingConfigA getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rateLimitsInput`<sup>Optional</sup> <a name="rateLimitsInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.rateLimitsInput"></a>

```java
public java.lang.Object getRateLimitsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>>

---

##### `routeOptimizedInput`<sup>Optional</sup> <a name="routeOptimizedInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.routeOptimizedInput"></a>

```java
public java.lang.Object getRouteOptimizedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

---

##### `budgetPolicyId`<sup>Required</sup> <a name="budgetPolicyId" id="@cdktf/provider-databricks.modelServing.ModelServing.property.budgetPolicyId"></a>

```java
public java.lang.String getBudgetPolicyId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.modelServing.ModelServing.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServing.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `routeOptimized`<sup>Required</sup> <a name="routeOptimized" id="@cdktf/provider-databricks.modelServing.ModelServing.property.routeOptimized"></a>

```java
public java.lang.Object getRouteOptimized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.modelServing.ModelServing.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ModelServingAiGateway <a name="ModelServingAiGateway" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGateway;

ModelServingAiGateway.builder()
//  .fallbackConfig(ModelServingAiGatewayFallbackConfig)
//  .guardrails(ModelServingAiGatewayGuardrails)
//  .inferenceTableConfig(ModelServingAiGatewayInferenceTableConfig)
//  .rateLimits(IResolvable)
//  .rateLimits(java.util.List<ModelServingAiGatewayRateLimits>)
//  .usageTrackingConfig(ModelServingAiGatewayUsageTrackingConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.fallbackConfig">fallbackConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig">ModelServingAiGatewayFallbackConfig</a></code> | fallback_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.guardrails">guardrails</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a></code> | guardrails block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.inferenceTableConfig">inferenceTableConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a></code> | inference_table_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.rateLimits">rateLimits</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits">ModelServingAiGatewayRateLimits</a>></code> | rate_limits block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.usageTrackingConfig">usageTrackingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a></code> | usage_tracking_config block. |

---

##### `fallbackConfig`<sup>Optional</sup> <a name="fallbackConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.fallbackConfig"></a>

```java
public ModelServingAiGatewayFallbackConfig getFallbackConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig">ModelServingAiGatewayFallbackConfig</a>

fallback_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#fallback_config ModelServing#fallback_config}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.guardrails"></a>

```java
public ModelServingAiGatewayGuardrails getGuardrails();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a>

guardrails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#guardrails ModelServing#guardrails}

---

##### `inferenceTableConfig`<sup>Optional</sup> <a name="inferenceTableConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.inferenceTableConfig"></a>

```java
public ModelServingAiGatewayInferenceTableConfig getInferenceTableConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a>

inference_table_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#inference_table_config ModelServing#inference_table_config}

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.rateLimits"></a>

```java
public java.lang.Object getRateLimits();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits">ModelServingAiGatewayRateLimits</a>>

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#rate_limits ModelServing#rate_limits}

---

##### `usageTrackingConfig`<sup>Optional</sup> <a name="usageTrackingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.usageTrackingConfig"></a>

```java
public ModelServingAiGatewayUsageTrackingConfig getUsageTrackingConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a>

usage_tracking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#usage_tracking_config ModelServing#usage_tracking_config}

---

### ModelServingAiGatewayFallbackConfig <a name="ModelServingAiGatewayFallbackConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayFallbackConfig;

ModelServingAiGatewayFallbackConfig.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#enabled ModelServing#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#enabled ModelServing#enabled}.

---

### ModelServingAiGatewayGuardrails <a name="ModelServingAiGatewayGuardrails" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayGuardrails;

ModelServingAiGatewayGuardrails.builder()
//  .input(ModelServingAiGatewayGuardrailsInput)
//  .output(ModelServingAiGatewayGuardrailsOutput)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails.property.input">input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a></code> | input block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails.property.output">output</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a></code> | output block. |

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails.property.input"></a>

```java
public ModelServingAiGatewayGuardrailsInput getInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#input ModelServing#input}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails.property.output"></a>

```java
public ModelServingAiGatewayGuardrailsOutput getOutput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#output ModelServing#output}

---

### ModelServingAiGatewayGuardrailsInput <a name="ModelServingAiGatewayGuardrailsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayGuardrailsInput;

ModelServingAiGatewayGuardrailsInput.builder()
//  .invalidKeywords(java.util.List<java.lang.String>)
//  .pii(ModelServingAiGatewayGuardrailsInputPii)
//  .safety(java.lang.Boolean)
//  .safety(IResolvable)
//  .validTopics(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.invalidKeywords">invalidKeywords</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#invalid_keywords ModelServing#invalid_keywords}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.pii">pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a></code> | pii block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.safety">safety</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#safety ModelServing#safety}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.validTopics">validTopics</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#valid_topics ModelServing#valid_topics}. |

---

##### `invalidKeywords`<sup>Optional</sup> <a name="invalidKeywords" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.invalidKeywords"></a>

```java
public java.util.List<java.lang.String> getInvalidKeywords();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#invalid_keywords ModelServing#invalid_keywords}.

---

##### `pii`<sup>Optional</sup> <a name="pii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.pii"></a>

```java
public ModelServingAiGatewayGuardrailsInputPii getPii();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a>

pii block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#pii ModelServing#pii}

---

##### `safety`<sup>Optional</sup> <a name="safety" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.safety"></a>

```java
public java.lang.Object getSafety();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#safety ModelServing#safety}.

---

##### `validTopics`<sup>Optional</sup> <a name="validTopics" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.validTopics"></a>

```java
public java.util.List<java.lang.String> getValidTopics();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#valid_topics ModelServing#valid_topics}.

---

### ModelServingAiGatewayGuardrailsInputPii <a name="ModelServingAiGatewayGuardrailsInputPii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayGuardrailsInputPii;

ModelServingAiGatewayGuardrailsInputPii.builder()
//  .behavior(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii.property.behavior">behavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#behavior ModelServing#behavior}. |

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#behavior ModelServing#behavior}.

---

### ModelServingAiGatewayGuardrailsOutput <a name="ModelServingAiGatewayGuardrailsOutput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayGuardrailsOutput;

ModelServingAiGatewayGuardrailsOutput.builder()
//  .invalidKeywords(java.util.List<java.lang.String>)
//  .pii(ModelServingAiGatewayGuardrailsOutputPii)
//  .safety(java.lang.Boolean)
//  .safety(IResolvable)
//  .validTopics(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.invalidKeywords">invalidKeywords</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#invalid_keywords ModelServing#invalid_keywords}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.pii">pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a></code> | pii block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.safety">safety</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#safety ModelServing#safety}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.validTopics">validTopics</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#valid_topics ModelServing#valid_topics}. |

---

##### `invalidKeywords`<sup>Optional</sup> <a name="invalidKeywords" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.invalidKeywords"></a>

```java
public java.util.List<java.lang.String> getInvalidKeywords();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#invalid_keywords ModelServing#invalid_keywords}.

---

##### `pii`<sup>Optional</sup> <a name="pii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.pii"></a>

```java
public ModelServingAiGatewayGuardrailsOutputPii getPii();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a>

pii block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#pii ModelServing#pii}

---

##### `safety`<sup>Optional</sup> <a name="safety" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.safety"></a>

```java
public java.lang.Object getSafety();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#safety ModelServing#safety}.

---

##### `validTopics`<sup>Optional</sup> <a name="validTopics" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.validTopics"></a>

```java
public java.util.List<java.lang.String> getValidTopics();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#valid_topics ModelServing#valid_topics}.

---

### ModelServingAiGatewayGuardrailsOutputPii <a name="ModelServingAiGatewayGuardrailsOutputPii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayGuardrailsOutputPii;

ModelServingAiGatewayGuardrailsOutputPii.builder()
//  .behavior(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii.property.behavior">behavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#behavior ModelServing#behavior}. |

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#behavior ModelServing#behavior}.

---

### ModelServingAiGatewayInferenceTableConfig <a name="ModelServingAiGatewayInferenceTableConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayInferenceTableConfig;

ModelServingAiGatewayInferenceTableConfig.builder()
//  .catalogName(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .schemaName(java.lang.String)
//  .tableNamePrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#catalog_name ModelServing#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#enabled ModelServing#enabled}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#schema_name ModelServing#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.tableNamePrefix">tableNamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#table_name_prefix ModelServing#table_name_prefix}. |

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#catalog_name ModelServing#catalog_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#enabled ModelServing#enabled}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#schema_name ModelServing#schema_name}.

---

##### `tableNamePrefix`<sup>Optional</sup> <a name="tableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.tableNamePrefix"></a>

```java
public java.lang.String getTableNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#table_name_prefix ModelServing#table_name_prefix}.

---

### ModelServingAiGatewayRateLimits <a name="ModelServingAiGatewayRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayRateLimits;

ModelServingAiGatewayRateLimits.builder()
    .renewalPeriod(java.lang.String)
//  .calls(java.lang.Number)
//  .key(java.lang.String)
//  .principal(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.renewalPeriod">renewalPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#renewal_period ModelServing#renewal_period}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.calls">calls</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#calls ModelServing#calls}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#key ModelServing#key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#principal ModelServing#principal}. |

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.renewalPeriod"></a>

```java
public java.lang.String getRenewalPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#renewal_period ModelServing#renewal_period}.

---

##### `calls`<sup>Optional</sup> <a name="calls" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.calls"></a>

```java
public java.lang.Number getCalls();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#calls ModelServing#calls}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#key ModelServing#key}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#principal ModelServing#principal}.

---

### ModelServingAiGatewayUsageTrackingConfig <a name="ModelServingAiGatewayUsageTrackingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayUsageTrackingConfig;

ModelServingAiGatewayUsageTrackingConfig.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#enabled ModelServing#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#enabled ModelServing#enabled}.

---

### ModelServingConfig <a name="ModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfig;

ModelServingConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .aiGateway(ModelServingAiGateway)
//  .budgetPolicyId(java.lang.String)
//  .config(ModelServingConfigA)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .rateLimits(IResolvable)
//  .rateLimits(java.util.List<ModelServingRateLimits>)
//  .routeOptimized(java.lang.Boolean)
//  .routeOptimized(IResolvable)
//  .tags(IResolvable)
//  .tags(java.util.List<ModelServingTags>)
//  .timeouts(ModelServingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.aiGateway">aiGateway</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a></code> | ai_gateway block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.budgetPolicyId">budgetPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#budget_policy_id ModelServing#budget_policy_id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#description ModelServing#description}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#id ModelServing#id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.rateLimits">rateLimits</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>></code> | rate_limits block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.routeOptimized">routeOptimized</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#route_optimized ModelServing#route_optimized}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `aiGateway`<sup>Optional</sup> <a name="aiGateway" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.aiGateway"></a>

```java
public ModelServingAiGateway getAiGateway();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a>

ai_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#ai_gateway ModelServing#ai_gateway}

---

##### `budgetPolicyId`<sup>Optional</sup> <a name="budgetPolicyId" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.budgetPolicyId"></a>

```java
public java.lang.String getBudgetPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#budget_policy_id ModelServing#budget_policy_id}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.config"></a>

```java
public ModelServingConfigA getConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#config ModelServing#config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#description ModelServing#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#id ModelServing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.rateLimits"></a>

```java
public java.lang.Object getRateLimits();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>>

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#rate_limits ModelServing#rate_limits}

---

##### `routeOptimized`<sup>Optional</sup> <a name="routeOptimized" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.routeOptimized"></a>

```java
public java.lang.Object getRouteOptimized();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#route_optimized ModelServing#route_optimized}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#tags ModelServing#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.timeouts"></a>

```java
public ModelServingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#timeouts ModelServing#timeouts}

---

### ModelServingConfigA <a name="ModelServingConfigA" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigA;

ModelServingConfigA.builder()
//  .autoCaptureConfig(ModelServingConfigAutoCaptureConfig)
//  .servedEntities(IResolvable)
//  .servedEntities(java.util.List<ModelServingConfigServedEntities>)
//  .servedModels(IResolvable)
//  .servedModels(java.util.List<ModelServingConfigServedModels>)
//  .trafficConfig(ModelServingConfigTrafficConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.autoCaptureConfig">autoCaptureConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a></code> | auto_capture_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.servedEntities">servedEntities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities">ModelServingConfigServedEntities</a>></code> | served_entities block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.servedModels">servedModels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>></code> | served_models block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.trafficConfig">trafficConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a></code> | traffic_config block. |

---

##### `autoCaptureConfig`<sup>Optional</sup> <a name="autoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.autoCaptureConfig"></a>

```java
public ModelServingConfigAutoCaptureConfig getAutoCaptureConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a>

auto_capture_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#auto_capture_config ModelServing#auto_capture_config}

---

##### `servedEntities`<sup>Optional</sup> <a name="servedEntities" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.servedEntities"></a>

```java
public java.lang.Object getServedEntities();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities">ModelServingConfigServedEntities</a>>

served_entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#served_entities ModelServing#served_entities}

---

##### `servedModels`<sup>Optional</sup> <a name="servedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.servedModels"></a>

```java
public java.lang.Object getServedModels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>>

served_models block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#served_models ModelServing#served_models}

---

##### `trafficConfig`<sup>Optional</sup> <a name="trafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.trafficConfig"></a>

```java
public ModelServingConfigTrafficConfig getTrafficConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

traffic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#traffic_config ModelServing#traffic_config}

---

### ModelServingConfigAutoCaptureConfig <a name="ModelServingConfigAutoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigAutoCaptureConfig;

ModelServingConfigAutoCaptureConfig.builder()
//  .catalogName(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .schemaName(java.lang.String)
//  .tableNamePrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#catalog_name ModelServing#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#enabled ModelServing#enabled}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#schema_name ModelServing#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.tableNamePrefix">tableNamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#table_name_prefix ModelServing#table_name_prefix}. |

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#catalog_name ModelServing#catalog_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#enabled ModelServing#enabled}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#schema_name ModelServing#schema_name}.

---

##### `tableNamePrefix`<sup>Optional</sup> <a name="tableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.tableNamePrefix"></a>

```java
public java.lang.String getTableNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#table_name_prefix ModelServing#table_name_prefix}.

---

### ModelServingConfigServedEntities <a name="ModelServingConfigServedEntities" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntities;

ModelServingConfigServedEntities.builder()
//  .entityName(java.lang.String)
//  .entityVersion(java.lang.String)
//  .environmentVars(java.util.Map<java.lang.String, java.lang.String>)
//  .externalModel(ModelServingConfigServedEntitiesExternalModel)
//  .instanceProfileArn(java.lang.String)
//  .maxProvisionedConcurrency(java.lang.Number)
//  .maxProvisionedThroughput(java.lang.Number)
//  .minProvisionedConcurrency(java.lang.Number)
//  .minProvisionedThroughput(java.lang.Number)
//  .name(java.lang.String)
//  .provisionedModelUnits(java.lang.Number)
//  .scaleToZeroEnabled(java.lang.Boolean)
//  .scaleToZeroEnabled(IResolvable)
//  .workloadSize(java.lang.String)
//  .workloadType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.entityName">entityName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#entity_name ModelServing#entity_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.entityVersion">entityVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#entity_version ModelServing#entity_version}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.environmentVars">environmentVars</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.externalModel">externalModel</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a></code> | external_model block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.maxProvisionedConcurrency">maxProvisionedConcurrency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#max_provisioned_concurrency ModelServing#max_provisioned_concurrency}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.maxProvisionedThroughput">maxProvisionedThroughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#max_provisioned_throughput ModelServing#max_provisioned_throughput}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.minProvisionedConcurrency">minProvisionedConcurrency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#min_provisioned_concurrency ModelServing#min_provisioned_concurrency}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.minProvisionedThroughput">minProvisionedThroughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#min_provisioned_throughput ModelServing#min_provisioned_throughput}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.provisionedModelUnits">provisionedModelUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#provisioned_model_units ModelServing#provisioned_model_units}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.scaleToZeroEnabled">scaleToZeroEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.workloadSize">workloadSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#workload_size ModelServing#workload_size}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#workload_type ModelServing#workload_type}. |

---

##### `entityName`<sup>Optional</sup> <a name="entityName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.entityName"></a>

```java
public java.lang.String getEntityName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#entity_name ModelServing#entity_name}.

---

##### `entityVersion`<sup>Optional</sup> <a name="entityVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.entityVersion"></a>

```java
public java.lang.String getEntityVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#entity_version ModelServing#entity_version}.

---

##### `environmentVars`<sup>Optional</sup> <a name="environmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.environmentVars"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVars();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}.

---

##### `externalModel`<sup>Optional</sup> <a name="externalModel" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.externalModel"></a>

```java
public ModelServingConfigServedEntitiesExternalModel getExternalModel();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a>

external_model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#external_model ModelServing#external_model}

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}.

---

##### `maxProvisionedConcurrency`<sup>Optional</sup> <a name="maxProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.maxProvisionedConcurrency"></a>

```java
public java.lang.Number getMaxProvisionedConcurrency();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#max_provisioned_concurrency ModelServing#max_provisioned_concurrency}.

---

##### `maxProvisionedThroughput`<sup>Optional</sup> <a name="maxProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.maxProvisionedThroughput"></a>

```java
public java.lang.Number getMaxProvisionedThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#max_provisioned_throughput ModelServing#max_provisioned_throughput}.

---

##### `minProvisionedConcurrency`<sup>Optional</sup> <a name="minProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.minProvisionedConcurrency"></a>

```java
public java.lang.Number getMinProvisionedConcurrency();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#min_provisioned_concurrency ModelServing#min_provisioned_concurrency}.

---

##### `minProvisionedThroughput`<sup>Optional</sup> <a name="minProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.minProvisionedThroughput"></a>

```java
public java.lang.Number getMinProvisionedThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#min_provisioned_throughput ModelServing#min_provisioned_throughput}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `provisionedModelUnits`<sup>Optional</sup> <a name="provisionedModelUnits" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.provisionedModelUnits"></a>

```java
public java.lang.Number getProvisionedModelUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#provisioned_model_units ModelServing#provisioned_model_units}.

---

##### `scaleToZeroEnabled`<sup>Optional</sup> <a name="scaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.scaleToZeroEnabled"></a>

```java
public java.lang.Object getScaleToZeroEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}.

---

##### `workloadSize`<sup>Optional</sup> <a name="workloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.workloadSize"></a>

```java
public java.lang.String getWorkloadSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#workload_size ModelServing#workload_size}.

---

##### `workloadType`<sup>Optional</sup> <a name="workloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#workload_type ModelServing#workload_type}.

---

### ModelServingConfigServedEntitiesExternalModel <a name="ModelServingConfigServedEntitiesExternalModel" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModel;

ModelServingConfigServedEntitiesExternalModel.builder()
    .name(java.lang.String)
    .provider(java.lang.String)
    .task(java.lang.String)
//  .ai21LabsConfig(ModelServingConfigServedEntitiesExternalModelAi21LabsConfig)
//  .amazonBedrockConfig(ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig)
//  .anthropicConfig(ModelServingConfigServedEntitiesExternalModelAnthropicConfig)
//  .cohereConfig(ModelServingConfigServedEntitiesExternalModelCohereConfig)
//  .customProviderConfig(ModelServingConfigServedEntitiesExternalModelCustomProviderConfig)
//  .databricksModelServingConfig(ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig)
//  .googleCloudVertexAiConfig(ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig)
//  .openaiConfig(ModelServingConfigServedEntitiesExternalModelOpenaiConfig)
//  .palmConfig(ModelServingConfigServedEntitiesExternalModelPalmConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.provider">provider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#provider ModelServing#provider}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.task">task</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#task ModelServing#task}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.ai21LabsConfig">ai21LabsConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a></code> | ai21labs_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.amazonBedrockConfig">amazonBedrockConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a></code> | amazon_bedrock_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.anthropicConfig">anthropicConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a></code> | anthropic_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.cohereConfig">cohereConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a></code> | cohere_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.customProviderConfig">customProviderConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig">ModelServingConfigServedEntitiesExternalModelCustomProviderConfig</a></code> | custom_provider_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.databricksModelServingConfig">databricksModelServingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a></code> | databricks_model_serving_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.googleCloudVertexAiConfig">googleCloudVertexAiConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a></code> | google_cloud_vertex_ai_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.openaiConfig">openaiConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a></code> | openai_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.palmConfig">palmConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a></code> | palm_config block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#provider ModelServing#provider}.

---

##### `task`<sup>Required</sup> <a name="task" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.task"></a>

```java
public java.lang.String getTask();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#task ModelServing#task}.

---

##### `ai21LabsConfig`<sup>Optional</sup> <a name="ai21LabsConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.ai21LabsConfig"></a>

```java
public ModelServingConfigServedEntitiesExternalModelAi21LabsConfig getAi21LabsConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a>

ai21labs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#ai21labs_config ModelServing#ai21labs_config}

---

##### `amazonBedrockConfig`<sup>Optional</sup> <a name="amazonBedrockConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.amazonBedrockConfig"></a>

```java
public ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig getAmazonBedrockConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a>

amazon_bedrock_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#amazon_bedrock_config ModelServing#amazon_bedrock_config}

---

##### `anthropicConfig`<sup>Optional</sup> <a name="anthropicConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.anthropicConfig"></a>

```java
public ModelServingConfigServedEntitiesExternalModelAnthropicConfig getAnthropicConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a>

anthropic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#anthropic_config ModelServing#anthropic_config}

---

##### `cohereConfig`<sup>Optional</sup> <a name="cohereConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.cohereConfig"></a>

```java
public ModelServingConfigServedEntitiesExternalModelCohereConfig getCohereConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a>

cohere_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#cohere_config ModelServing#cohere_config}

---

##### `customProviderConfig`<sup>Optional</sup> <a name="customProviderConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.customProviderConfig"></a>

```java
public ModelServingConfigServedEntitiesExternalModelCustomProviderConfig getCustomProviderConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig">ModelServingConfigServedEntitiesExternalModelCustomProviderConfig</a>

custom_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#custom_provider_config ModelServing#custom_provider_config}

---

##### `databricksModelServingConfig`<sup>Optional</sup> <a name="databricksModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.databricksModelServingConfig"></a>

```java
public ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig getDatabricksModelServingConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a>

databricks_model_serving_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#databricks_model_serving_config ModelServing#databricks_model_serving_config}

---

##### `googleCloudVertexAiConfig`<sup>Optional</sup> <a name="googleCloudVertexAiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.googleCloudVertexAiConfig"></a>

```java
public ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig getGoogleCloudVertexAiConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a>

google_cloud_vertex_ai_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#google_cloud_vertex_ai_config ModelServing#google_cloud_vertex_ai_config}

---

##### `openaiConfig`<sup>Optional</sup> <a name="openaiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.openaiConfig"></a>

```java
public ModelServingConfigServedEntitiesExternalModelOpenaiConfig getOpenaiConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a>

openai_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#openai_config ModelServing#openai_config}

---

##### `palmConfig`<sup>Optional</sup> <a name="palmConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.palmConfig"></a>

```java
public ModelServingConfigServedEntitiesExternalModelPalmConfig getPalmConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a>

palm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#palm_config ModelServing#palm_config}

---

### ModelServingConfigServedEntitiesExternalModelAi21LabsConfig <a name="ModelServingConfigServedEntitiesExternalModelAi21LabsConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig;

ModelServingConfigServedEntitiesExternalModelAi21LabsConfig.builder()
//  .ai21LabsApiKey(java.lang.String)
//  .ai21LabsApiKeyPlaintext(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig.property.ai21LabsApiKey">ai21LabsApiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#ai21labs_api_key ModelServing#ai21labs_api_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig.property.ai21LabsApiKeyPlaintext">ai21LabsApiKeyPlaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#ai21labs_api_key_plaintext ModelServing#ai21labs_api_key_plaintext}. |

---

##### `ai21LabsApiKey`<sup>Optional</sup> <a name="ai21LabsApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig.property.ai21LabsApiKey"></a>

```java
public java.lang.String getAi21LabsApiKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#ai21labs_api_key ModelServing#ai21labs_api_key}.

---

##### `ai21LabsApiKeyPlaintext`<sup>Optional</sup> <a name="ai21LabsApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig.property.ai21LabsApiKeyPlaintext"></a>

```java
public java.lang.String getAi21LabsApiKeyPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#ai21labs_api_key_plaintext ModelServing#ai21labs_api_key_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig <a name="ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig;

ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.builder()
    .awsRegion(java.lang.String)
    .bedrockProvider(java.lang.String)
//  .awsAccessKeyId(java.lang.String)
//  .awsAccessKeyIdPlaintext(java.lang.String)
//  .awsSecretAccessKey(java.lang.String)
//  .awsSecretAccessKeyPlaintext(java.lang.String)
//  .instanceProfileArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#aws_region ModelServing#aws_region}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.bedrockProvider">bedrockProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#bedrock_provider ModelServing#bedrock_provider}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsAccessKeyId">awsAccessKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#aws_access_key_id ModelServing#aws_access_key_id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsAccessKeyIdPlaintext">awsAccessKeyIdPlaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#aws_access_key_id_plaintext ModelServing#aws_access_key_id_plaintext}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#aws_secret_access_key ModelServing#aws_secret_access_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsSecretAccessKeyPlaintext">awsSecretAccessKeyPlaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#aws_secret_access_key_plaintext ModelServing#aws_secret_access_key_plaintext}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}. |

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#aws_region ModelServing#aws_region}.

---

##### `bedrockProvider`<sup>Required</sup> <a name="bedrockProvider" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.bedrockProvider"></a>

```java
public java.lang.String getBedrockProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#bedrock_provider ModelServing#bedrock_provider}.

---

##### `awsAccessKeyId`<sup>Optional</sup> <a name="awsAccessKeyId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsAccessKeyId"></a>

```java
public java.lang.String getAwsAccessKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#aws_access_key_id ModelServing#aws_access_key_id}.

---

##### `awsAccessKeyIdPlaintext`<sup>Optional</sup> <a name="awsAccessKeyIdPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsAccessKeyIdPlaintext"></a>

```java
public java.lang.String getAwsAccessKeyIdPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#aws_access_key_id_plaintext ModelServing#aws_access_key_id_plaintext}.

---

##### `awsSecretAccessKey`<sup>Optional</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsSecretAccessKey"></a>

```java
public java.lang.String getAwsSecretAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#aws_secret_access_key ModelServing#aws_secret_access_key}.

---

##### `awsSecretAccessKeyPlaintext`<sup>Optional</sup> <a name="awsSecretAccessKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsSecretAccessKeyPlaintext"></a>

```java
public java.lang.String getAwsSecretAccessKeyPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#aws_secret_access_key_plaintext ModelServing#aws_secret_access_key_plaintext}.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}.

---

### ModelServingConfigServedEntitiesExternalModelAnthropicConfig <a name="ModelServingConfigServedEntitiesExternalModelAnthropicConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelAnthropicConfig;

ModelServingConfigServedEntitiesExternalModelAnthropicConfig.builder()
//  .anthropicApiKey(java.lang.String)
//  .anthropicApiKeyPlaintext(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig.property.anthropicApiKey">anthropicApiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#anthropic_api_key ModelServing#anthropic_api_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig.property.anthropicApiKeyPlaintext">anthropicApiKeyPlaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#anthropic_api_key_plaintext ModelServing#anthropic_api_key_plaintext}. |

---

##### `anthropicApiKey`<sup>Optional</sup> <a name="anthropicApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig.property.anthropicApiKey"></a>

```java
public java.lang.String getAnthropicApiKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#anthropic_api_key ModelServing#anthropic_api_key}.

---

##### `anthropicApiKeyPlaintext`<sup>Optional</sup> <a name="anthropicApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig.property.anthropicApiKeyPlaintext"></a>

```java
public java.lang.String getAnthropicApiKeyPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#anthropic_api_key_plaintext ModelServing#anthropic_api_key_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelCohereConfig <a name="ModelServingConfigServedEntitiesExternalModelCohereConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelCohereConfig;

ModelServingConfigServedEntitiesExternalModelCohereConfig.builder()
//  .cohereApiBase(java.lang.String)
//  .cohereApiKey(java.lang.String)
//  .cohereApiKeyPlaintext(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.property.cohereApiBase">cohereApiBase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#cohere_api_base ModelServing#cohere_api_base}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.property.cohereApiKey">cohereApiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#cohere_api_key ModelServing#cohere_api_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.property.cohereApiKeyPlaintext">cohereApiKeyPlaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#cohere_api_key_plaintext ModelServing#cohere_api_key_plaintext}. |

---

##### `cohereApiBase`<sup>Optional</sup> <a name="cohereApiBase" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.property.cohereApiBase"></a>

```java
public java.lang.String getCohereApiBase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#cohere_api_base ModelServing#cohere_api_base}.

---

##### `cohereApiKey`<sup>Optional</sup> <a name="cohereApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.property.cohereApiKey"></a>

```java
public java.lang.String getCohereApiKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#cohere_api_key ModelServing#cohere_api_key}.

---

##### `cohereApiKeyPlaintext`<sup>Optional</sup> <a name="cohereApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.property.cohereApiKeyPlaintext"></a>

```java
public java.lang.String getCohereApiKeyPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#cohere_api_key_plaintext ModelServing#cohere_api_key_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelCustomProviderConfig <a name="ModelServingConfigServedEntitiesExternalModelCustomProviderConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig;

ModelServingConfigServedEntitiesExternalModelCustomProviderConfig.builder()
    .customProviderUrl(java.lang.String)
//  .apiKeyAuth(ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth)
//  .bearerTokenAuth(ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig.property.customProviderUrl">customProviderUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#custom_provider_url ModelServing#custom_provider_url}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig.property.apiKeyAuth">apiKeyAuth</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth</a></code> | api_key_auth block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig.property.bearerTokenAuth">bearerTokenAuth</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth</a></code> | bearer_token_auth block. |

---

##### `customProviderUrl`<sup>Required</sup> <a name="customProviderUrl" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig.property.customProviderUrl"></a>

```java
public java.lang.String getCustomProviderUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#custom_provider_url ModelServing#custom_provider_url}.

---

##### `apiKeyAuth`<sup>Optional</sup> <a name="apiKeyAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig.property.apiKeyAuth"></a>

```java
public ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth getApiKeyAuth();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth</a>

api_key_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#api_key_auth ModelServing#api_key_auth}

---

##### `bearerTokenAuth`<sup>Optional</sup> <a name="bearerTokenAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig.property.bearerTokenAuth"></a>

```java
public ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth getBearerTokenAuth();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth</a>

bearer_token_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#bearer_token_auth ModelServing#bearer_token_auth}

---

### ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth <a name="ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth;

ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth.builder()
    .key(java.lang.String)
//  .value(java.lang.String)
//  .valuePlaintext(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#key ModelServing#key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#value ModelServing#value}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth.property.valuePlaintext">valuePlaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#value_plaintext ModelServing#value_plaintext}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#key ModelServing#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#value ModelServing#value}.

---

##### `valuePlaintext`<sup>Optional</sup> <a name="valuePlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth.property.valuePlaintext"></a>

```java
public java.lang.String getValuePlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#value_plaintext ModelServing#value_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth <a name="ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth;

ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth.builder()
//  .token(java.lang.String)
//  .tokenPlaintext(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth.property.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#token ModelServing#token}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth.property.tokenPlaintext">tokenPlaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#token_plaintext ModelServing#token_plaintext}. |

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#token ModelServing#token}.

---

##### `tokenPlaintext`<sup>Optional</sup> <a name="tokenPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth.property.tokenPlaintext"></a>

```java
public java.lang.String getTokenPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#token_plaintext ModelServing#token_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig <a name="ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig;

ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.builder()
    .databricksWorkspaceUrl(java.lang.String)
//  .databricksApiToken(java.lang.String)
//  .databricksApiTokenPlaintext(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksWorkspaceUrl">databricksWorkspaceUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#databricks_workspace_url ModelServing#databricks_workspace_url}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksApiToken">databricksApiToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#databricks_api_token ModelServing#databricks_api_token}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksApiTokenPlaintext">databricksApiTokenPlaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#databricks_api_token_plaintext ModelServing#databricks_api_token_plaintext}. |

---

##### `databricksWorkspaceUrl`<sup>Required</sup> <a name="databricksWorkspaceUrl" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksWorkspaceUrl"></a>

```java
public java.lang.String getDatabricksWorkspaceUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#databricks_workspace_url ModelServing#databricks_workspace_url}.

---

##### `databricksApiToken`<sup>Optional</sup> <a name="databricksApiToken" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksApiToken"></a>

```java
public java.lang.String getDatabricksApiToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#databricks_api_token ModelServing#databricks_api_token}.

---

##### `databricksApiTokenPlaintext`<sup>Optional</sup> <a name="databricksApiTokenPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksApiTokenPlaintext"></a>

```java
public java.lang.String getDatabricksApiTokenPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#databricks_api_token_plaintext ModelServing#databricks_api_token_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig <a name="ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig;

ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.builder()
    .projectId(java.lang.String)
    .region(java.lang.String)
//  .privateKey(java.lang.String)
//  .privateKeyPlaintext(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#project_id ModelServing#project_id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#region ModelServing#region}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#private_key ModelServing#private_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.privateKeyPlaintext">privateKeyPlaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#private_key_plaintext ModelServing#private_key_plaintext}. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#project_id ModelServing#project_id}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#region ModelServing#region}.

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#private_key ModelServing#private_key}.

---

##### `privateKeyPlaintext`<sup>Optional</sup> <a name="privateKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.privateKeyPlaintext"></a>

```java
public java.lang.String getPrivateKeyPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#private_key_plaintext ModelServing#private_key_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelOpenaiConfig <a name="ModelServingConfigServedEntitiesExternalModelOpenaiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelOpenaiConfig;

ModelServingConfigServedEntitiesExternalModelOpenaiConfig.builder()
//  .microsoftEntraClientId(java.lang.String)
//  .microsoftEntraClientSecret(java.lang.String)
//  .microsoftEntraClientSecretPlaintext(java.lang.String)
//  .microsoftEntraTenantId(java.lang.String)
//  .openaiApiBase(java.lang.String)
//  .openaiApiKey(java.lang.String)
//  .openaiApiKeyPlaintext(java.lang.String)
//  .openaiApiType(java.lang.String)
//  .openaiApiVersion(java.lang.String)
//  .openaiDeploymentName(java.lang.String)
//  .openaiOrganization(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientId">microsoftEntraClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#microsoft_entra_client_id ModelServing#microsoft_entra_client_id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientSecret">microsoftEntraClientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#microsoft_entra_client_secret ModelServing#microsoft_entra_client_secret}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientSecretPlaintext">microsoftEntraClientSecretPlaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#microsoft_entra_client_secret_plaintext ModelServing#microsoft_entra_client_secret_plaintext}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraTenantId">microsoftEntraTenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#microsoft_entra_tenant_id ModelServing#microsoft_entra_tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiBase">openaiApiBase</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#openai_api_base ModelServing#openai_api_base}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiKey">openaiApiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#openai_api_key ModelServing#openai_api_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiKeyPlaintext">openaiApiKeyPlaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#openai_api_key_plaintext ModelServing#openai_api_key_plaintext}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiType">openaiApiType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#openai_api_type ModelServing#openai_api_type}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiVersion">openaiApiVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#openai_api_version ModelServing#openai_api_version}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiDeploymentName">openaiDeploymentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#openai_deployment_name ModelServing#openai_deployment_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiOrganization">openaiOrganization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#openai_organization ModelServing#openai_organization}. |

---

##### `microsoftEntraClientId`<sup>Optional</sup> <a name="microsoftEntraClientId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientId"></a>

```java
public java.lang.String getMicrosoftEntraClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#microsoft_entra_client_id ModelServing#microsoft_entra_client_id}.

---

##### `microsoftEntraClientSecret`<sup>Optional</sup> <a name="microsoftEntraClientSecret" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientSecret"></a>

```java
public java.lang.String getMicrosoftEntraClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#microsoft_entra_client_secret ModelServing#microsoft_entra_client_secret}.

---

##### `microsoftEntraClientSecretPlaintext`<sup>Optional</sup> <a name="microsoftEntraClientSecretPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientSecretPlaintext"></a>

```java
public java.lang.String getMicrosoftEntraClientSecretPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#microsoft_entra_client_secret_plaintext ModelServing#microsoft_entra_client_secret_plaintext}.

---

##### `microsoftEntraTenantId`<sup>Optional</sup> <a name="microsoftEntraTenantId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraTenantId"></a>

```java
public java.lang.String getMicrosoftEntraTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#microsoft_entra_tenant_id ModelServing#microsoft_entra_tenant_id}.

---

##### `openaiApiBase`<sup>Optional</sup> <a name="openaiApiBase" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiBase"></a>

```java
public java.lang.String getOpenaiApiBase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#openai_api_base ModelServing#openai_api_base}.

---

##### `openaiApiKey`<sup>Optional</sup> <a name="openaiApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiKey"></a>

```java
public java.lang.String getOpenaiApiKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#openai_api_key ModelServing#openai_api_key}.

---

##### `openaiApiKeyPlaintext`<sup>Optional</sup> <a name="openaiApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiKeyPlaintext"></a>

```java
public java.lang.String getOpenaiApiKeyPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#openai_api_key_plaintext ModelServing#openai_api_key_plaintext}.

---

##### `openaiApiType`<sup>Optional</sup> <a name="openaiApiType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiType"></a>

```java
public java.lang.String getOpenaiApiType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#openai_api_type ModelServing#openai_api_type}.

---

##### `openaiApiVersion`<sup>Optional</sup> <a name="openaiApiVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiVersion"></a>

```java
public java.lang.String getOpenaiApiVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#openai_api_version ModelServing#openai_api_version}.

---

##### `openaiDeploymentName`<sup>Optional</sup> <a name="openaiDeploymentName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiDeploymentName"></a>

```java
public java.lang.String getOpenaiDeploymentName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#openai_deployment_name ModelServing#openai_deployment_name}.

---

##### `openaiOrganization`<sup>Optional</sup> <a name="openaiOrganization" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiOrganization"></a>

```java
public java.lang.String getOpenaiOrganization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#openai_organization ModelServing#openai_organization}.

---

### ModelServingConfigServedEntitiesExternalModelPalmConfig <a name="ModelServingConfigServedEntitiesExternalModelPalmConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelPalmConfig;

ModelServingConfigServedEntitiesExternalModelPalmConfig.builder()
//  .palmApiKey(java.lang.String)
//  .palmApiKeyPlaintext(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig.property.palmApiKey">palmApiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#palm_api_key ModelServing#palm_api_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig.property.palmApiKeyPlaintext">palmApiKeyPlaintext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#palm_api_key_plaintext ModelServing#palm_api_key_plaintext}. |

---

##### `palmApiKey`<sup>Optional</sup> <a name="palmApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig.property.palmApiKey"></a>

```java
public java.lang.String getPalmApiKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#palm_api_key ModelServing#palm_api_key}.

---

##### `palmApiKeyPlaintext`<sup>Optional</sup> <a name="palmApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig.property.palmApiKeyPlaintext"></a>

```java
public java.lang.String getPalmApiKeyPlaintext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#palm_api_key_plaintext ModelServing#palm_api_key_plaintext}.

---

### ModelServingConfigServedModels <a name="ModelServingConfigServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedModels;

ModelServingConfigServedModels.builder()
    .modelName(java.lang.String)
    .modelVersion(java.lang.String)
//  .environmentVars(java.util.Map<java.lang.String, java.lang.String>)
//  .instanceProfileArn(java.lang.String)
//  .maxProvisionedConcurrency(java.lang.Number)
//  .maxProvisionedThroughput(java.lang.Number)
//  .minProvisionedConcurrency(java.lang.Number)
//  .minProvisionedThroughput(java.lang.Number)
//  .name(java.lang.String)
//  .provisionedModelUnits(java.lang.Number)
//  .scaleToZeroEnabled(java.lang.Boolean)
//  .scaleToZeroEnabled(IResolvable)
//  .workloadSize(java.lang.String)
//  .workloadType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelName">modelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#model_name ModelServing#model_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelVersion">modelVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#model_version ModelServing#model_version}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.environmentVars">environmentVars</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.maxProvisionedConcurrency">maxProvisionedConcurrency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#max_provisioned_concurrency ModelServing#max_provisioned_concurrency}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.maxProvisionedThroughput">maxProvisionedThroughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#max_provisioned_throughput ModelServing#max_provisioned_throughput}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.minProvisionedConcurrency">minProvisionedConcurrency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#min_provisioned_concurrency ModelServing#min_provisioned_concurrency}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.minProvisionedThroughput">minProvisionedThroughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#min_provisioned_throughput ModelServing#min_provisioned_throughput}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.provisionedModelUnits">provisionedModelUnits</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#provisioned_model_units ModelServing#provisioned_model_units}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.scaleToZeroEnabled">scaleToZeroEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadSize">workloadSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#workload_size ModelServing#workload_size}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#workload_type ModelServing#workload_type}. |

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#model_name ModelServing#model_name}.

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelVersion"></a>

```java
public java.lang.String getModelVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#model_version ModelServing#model_version}.

---

##### `environmentVars`<sup>Optional</sup> <a name="environmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.environmentVars"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVars();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}.

---

##### `maxProvisionedConcurrency`<sup>Optional</sup> <a name="maxProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.maxProvisionedConcurrency"></a>

```java
public java.lang.Number getMaxProvisionedConcurrency();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#max_provisioned_concurrency ModelServing#max_provisioned_concurrency}.

---

##### `maxProvisionedThroughput`<sup>Optional</sup> <a name="maxProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.maxProvisionedThroughput"></a>

```java
public java.lang.Number getMaxProvisionedThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#max_provisioned_throughput ModelServing#max_provisioned_throughput}.

---

##### `minProvisionedConcurrency`<sup>Optional</sup> <a name="minProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.minProvisionedConcurrency"></a>

```java
public java.lang.Number getMinProvisionedConcurrency();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#min_provisioned_concurrency ModelServing#min_provisioned_concurrency}.

---

##### `minProvisionedThroughput`<sup>Optional</sup> <a name="minProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.minProvisionedThroughput"></a>

```java
public java.lang.Number getMinProvisionedThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#min_provisioned_throughput ModelServing#min_provisioned_throughput}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `provisionedModelUnits`<sup>Optional</sup> <a name="provisionedModelUnits" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.provisionedModelUnits"></a>

```java
public java.lang.Number getProvisionedModelUnits();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#provisioned_model_units ModelServing#provisioned_model_units}.

---

##### `scaleToZeroEnabled`<sup>Optional</sup> <a name="scaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.scaleToZeroEnabled"></a>

```java
public java.lang.Object getScaleToZeroEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}.

---

##### `workloadSize`<sup>Optional</sup> <a name="workloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadSize"></a>

```java
public java.lang.String getWorkloadSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#workload_size ModelServing#workload_size}.

---

##### `workloadType`<sup>Optional</sup> <a name="workloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#workload_type ModelServing#workload_type}.

---

### ModelServingConfigTrafficConfig <a name="ModelServingConfigTrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigTrafficConfig;

ModelServingConfigTrafficConfig.builder()
//  .routes(IResolvable)
//  .routes(java.util.List<ModelServingConfigTrafficConfigRoutes>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig.property.routes">routes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>></code> | routes block. |

---

##### `routes`<sup>Optional</sup> <a name="routes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig.property.routes"></a>

```java
public java.lang.Object getRoutes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>>

routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#routes ModelServing#routes}

---

### ModelServingConfigTrafficConfigRoutes <a name="ModelServingConfigTrafficConfigRoutes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigTrafficConfigRoutes;

ModelServingConfigTrafficConfigRoutes.builder()
    .trafficPercentage(java.lang.Number)
//  .servedEntityName(java.lang.String)
//  .servedModelName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.trafficPercentage">trafficPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#traffic_percentage ModelServing#traffic_percentage}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.servedEntityName">servedEntityName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#served_entity_name ModelServing#served_entity_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.servedModelName">servedModelName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#served_model_name ModelServing#served_model_name}. |

---

##### `trafficPercentage`<sup>Required</sup> <a name="trafficPercentage" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.trafficPercentage"></a>

```java
public java.lang.Number getTrafficPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#traffic_percentage ModelServing#traffic_percentage}.

---

##### `servedEntityName`<sup>Optional</sup> <a name="servedEntityName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.servedEntityName"></a>

```java
public java.lang.String getServedEntityName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#served_entity_name ModelServing#served_entity_name}.

---

##### `servedModelName`<sup>Optional</sup> <a name="servedModelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.servedModelName"></a>

```java
public java.lang.String getServedModelName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#served_model_name ModelServing#served_model_name}.

---

### ModelServingRateLimits <a name="ModelServingRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingRateLimits;

ModelServingRateLimits.builder()
    .calls(java.lang.Number)
    .renewalPeriod(java.lang.String)
//  .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.calls">calls</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#calls ModelServing#calls}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.renewalPeriod">renewalPeriod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#renewal_period ModelServing#renewal_period}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#key ModelServing#key}. |

---

##### `calls`<sup>Required</sup> <a name="calls" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.calls"></a>

```java
public java.lang.Number getCalls();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#calls ModelServing#calls}.

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.renewalPeriod"></a>

```java
public java.lang.String getRenewalPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#renewal_period ModelServing#renewal_period}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#key ModelServing#key}.

---

### ModelServingTags <a name="ModelServingTags" id="@cdktf/provider-databricks.modelServing.ModelServingTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingTags;

ModelServingTags.builder()
    .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#key ModelServing#key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#value ModelServing#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServing.ModelServingTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#key ModelServing#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#value ModelServing#value}.

---

### ModelServingTimeouts <a name="ModelServingTimeouts" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingTimeouts;

ModelServingTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#create ModelServing#create}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#update ModelServing#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#create ModelServing#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/model_serving#update ModelServing#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ModelServingAiGatewayFallbackConfigOutputReference <a name="ModelServingAiGatewayFallbackConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayFallbackConfigOutputReference;

new ModelServingAiGatewayFallbackConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig">ModelServingAiGatewayFallbackConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.internalValue"></a>

```java
public ModelServingAiGatewayFallbackConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig">ModelServingAiGatewayFallbackConfig</a>

---


### ModelServingAiGatewayGuardrailsInputOutputReference <a name="ModelServingAiGatewayGuardrailsInputOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayGuardrailsInputOutputReference;

new ModelServingAiGatewayGuardrailsInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.putPii">putPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetInvalidKeywords">resetInvalidKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetPii">resetPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetSafety">resetSafety</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetValidTopics">resetValidTopics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPii` <a name="putPii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.putPii"></a>

```java
public void putPii(ModelServingAiGatewayGuardrailsInputPii value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.putPii.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a>

---

##### `resetInvalidKeywords` <a name="resetInvalidKeywords" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetInvalidKeywords"></a>

```java
public void resetInvalidKeywords()
```

##### `resetPii` <a name="resetPii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetPii"></a>

```java
public void resetPii()
```

##### `resetSafety` <a name="resetSafety" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetSafety"></a>

```java
public void resetSafety()
```

##### `resetValidTopics` <a name="resetValidTopics" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetValidTopics"></a>

```java
public void resetValidTopics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.pii">pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference">ModelServingAiGatewayGuardrailsInputPiiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.invalidKeywordsInput">invalidKeywordsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.piiInput">piiInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.safetyInput">safetyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.validTopicsInput">validTopicsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.invalidKeywords">invalidKeywords</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.safety">safety</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.validTopics">validTopics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pii`<sup>Required</sup> <a name="pii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.pii"></a>

```java
public ModelServingAiGatewayGuardrailsInputPiiOutputReference getPii();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference">ModelServingAiGatewayGuardrailsInputPiiOutputReference</a>

---

##### `invalidKeywordsInput`<sup>Optional</sup> <a name="invalidKeywordsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.invalidKeywordsInput"></a>

```java
public java.util.List<java.lang.String> getInvalidKeywordsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `piiInput`<sup>Optional</sup> <a name="piiInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.piiInput"></a>

```java
public ModelServingAiGatewayGuardrailsInputPii getPiiInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a>

---

##### `safetyInput`<sup>Optional</sup> <a name="safetyInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.safetyInput"></a>

```java
public java.lang.Object getSafetyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validTopicsInput`<sup>Optional</sup> <a name="validTopicsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.validTopicsInput"></a>

```java
public java.util.List<java.lang.String> getValidTopicsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `invalidKeywords`<sup>Required</sup> <a name="invalidKeywords" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.invalidKeywords"></a>

```java
public java.util.List<java.lang.String> getInvalidKeywords();
```

- *Type:* java.util.List<java.lang.String>

---

##### `safety`<sup>Required</sup> <a name="safety" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.safety"></a>

```java
public java.lang.Object getSafety();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validTopics`<sup>Required</sup> <a name="validTopics" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.validTopics"></a>

```java
public java.util.List<java.lang.String> getValidTopics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.internalValue"></a>

```java
public ModelServingAiGatewayGuardrailsInput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a>

---


### ModelServingAiGatewayGuardrailsInputPiiOutputReference <a name="ModelServingAiGatewayGuardrailsInputPiiOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayGuardrailsInputPiiOutputReference;

new ModelServingAiGatewayGuardrailsInputPiiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.resetBehavior">resetBehavior</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBehavior` <a name="resetBehavior" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.resetBehavior"></a>

```java
public void resetBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.behavior">behavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.behaviorInput"></a>

```java
public java.lang.String getBehaviorInput();
```

- *Type:* java.lang.String

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.internalValue"></a>

```java
public ModelServingAiGatewayGuardrailsInputPii getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a>

---


### ModelServingAiGatewayGuardrailsOutputOutputReference <a name="ModelServingAiGatewayGuardrailsOutputOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayGuardrailsOutputOutputReference;

new ModelServingAiGatewayGuardrailsOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.putPii">putPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetInvalidKeywords">resetInvalidKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetPii">resetPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetSafety">resetSafety</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetValidTopics">resetValidTopics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPii` <a name="putPii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.putPii"></a>

```java
public void putPii(ModelServingAiGatewayGuardrailsOutputPii value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.putPii.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a>

---

##### `resetInvalidKeywords` <a name="resetInvalidKeywords" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetInvalidKeywords"></a>

```java
public void resetInvalidKeywords()
```

##### `resetPii` <a name="resetPii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetPii"></a>

```java
public void resetPii()
```

##### `resetSafety` <a name="resetSafety" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetSafety"></a>

```java
public void resetSafety()
```

##### `resetValidTopics` <a name="resetValidTopics" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetValidTopics"></a>

```java
public void resetValidTopics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.pii">pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference">ModelServingAiGatewayGuardrailsOutputPiiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.invalidKeywordsInput">invalidKeywordsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.piiInput">piiInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.safetyInput">safetyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.validTopicsInput">validTopicsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.invalidKeywords">invalidKeywords</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.safety">safety</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.validTopics">validTopics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pii`<sup>Required</sup> <a name="pii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.pii"></a>

```java
public ModelServingAiGatewayGuardrailsOutputPiiOutputReference getPii();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference">ModelServingAiGatewayGuardrailsOutputPiiOutputReference</a>

---

##### `invalidKeywordsInput`<sup>Optional</sup> <a name="invalidKeywordsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.invalidKeywordsInput"></a>

```java
public java.util.List<java.lang.String> getInvalidKeywordsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `piiInput`<sup>Optional</sup> <a name="piiInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.piiInput"></a>

```java
public ModelServingAiGatewayGuardrailsOutputPii getPiiInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a>

---

##### `safetyInput`<sup>Optional</sup> <a name="safetyInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.safetyInput"></a>

```java
public java.lang.Object getSafetyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validTopicsInput`<sup>Optional</sup> <a name="validTopicsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.validTopicsInput"></a>

```java
public java.util.List<java.lang.String> getValidTopicsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `invalidKeywords`<sup>Required</sup> <a name="invalidKeywords" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.invalidKeywords"></a>

```java
public java.util.List<java.lang.String> getInvalidKeywords();
```

- *Type:* java.util.List<java.lang.String>

---

##### `safety`<sup>Required</sup> <a name="safety" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.safety"></a>

```java
public java.lang.Object getSafety();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validTopics`<sup>Required</sup> <a name="validTopics" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.validTopics"></a>

```java
public java.util.List<java.lang.String> getValidTopics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.internalValue"></a>

```java
public ModelServingAiGatewayGuardrailsOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a>

---


### ModelServingAiGatewayGuardrailsOutputPiiOutputReference <a name="ModelServingAiGatewayGuardrailsOutputPiiOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayGuardrailsOutputPiiOutputReference;

new ModelServingAiGatewayGuardrailsOutputPiiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.resetBehavior">resetBehavior</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBehavior` <a name="resetBehavior" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.resetBehavior"></a>

```java
public void resetBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.behavior">behavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.behaviorInput"></a>

```java
public java.lang.String getBehaviorInput();
```

- *Type:* java.lang.String

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.behavior"></a>

```java
public java.lang.String getBehavior();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.internalValue"></a>

```java
public ModelServingAiGatewayGuardrailsOutputPii getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a>

---


### ModelServingAiGatewayGuardrailsOutputReference <a name="ModelServingAiGatewayGuardrailsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayGuardrailsOutputReference;

new ModelServingAiGatewayGuardrailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resetOutput">resetOutput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInput` <a name="putInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.putInput"></a>

```java
public void putInput(ModelServingAiGatewayGuardrailsInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.putInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a>

---

##### `putOutput` <a name="putOutput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.putOutput"></a>

```java
public void putOutput(ModelServingAiGatewayGuardrailsOutput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a>

---

##### `resetInput` <a name="resetInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resetInput"></a>

```java
public void resetInput()
```

##### `resetOutput` <a name="resetOutput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resetOutput"></a>

```java
public void resetOutput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference">ModelServingAiGatewayGuardrailsInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.output">output</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference">ModelServingAiGatewayGuardrailsOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.inputInput">inputInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.outputInput">outputInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.input"></a>

```java
public ModelServingAiGatewayGuardrailsInputOutputReference getInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference">ModelServingAiGatewayGuardrailsInputOutputReference</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.output"></a>

```java
public ModelServingAiGatewayGuardrailsOutputOutputReference getOutput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference">ModelServingAiGatewayGuardrailsOutputOutputReference</a>

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.inputInput"></a>

```java
public ModelServingAiGatewayGuardrailsInput getInputInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a>

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.outputInput"></a>

```java
public ModelServingAiGatewayGuardrailsOutput getOutputInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.internalValue"></a>

```java
public ModelServingAiGatewayGuardrails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a>

---


### ModelServingAiGatewayInferenceTableConfigOutputReference <a name="ModelServingAiGatewayInferenceTableConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayInferenceTableConfigOutputReference;

new ModelServingAiGatewayInferenceTableConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetTableNamePrefix">resetTableNamePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```

##### `resetTableNamePrefix` <a name="resetTableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetTableNamePrefix"></a>

```java
public void resetTableNamePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefixInput">tableNamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefix">tableNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNamePrefixInput`<sup>Optional</sup> <a name="tableNamePrefixInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefixInput"></a>

```java
public java.lang.String getTableNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefix"></a>

```java
public java.lang.String getTableNamePrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.internalValue"></a>

```java
public ModelServingAiGatewayInferenceTableConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a>

---


### ModelServingAiGatewayOutputReference <a name="ModelServingAiGatewayOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayOutputReference;

new ModelServingAiGatewayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putFallbackConfig">putFallbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putGuardrails">putGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putInferenceTableConfig">putInferenceTableConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putRateLimits">putRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putUsageTrackingConfig">putUsageTrackingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetFallbackConfig">resetFallbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetGuardrails">resetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetInferenceTableConfig">resetInferenceTableConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetRateLimits">resetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetUsageTrackingConfig">resetUsageTrackingConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFallbackConfig` <a name="putFallbackConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putFallbackConfig"></a>

```java
public void putFallbackConfig(ModelServingAiGatewayFallbackConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putFallbackConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig">ModelServingAiGatewayFallbackConfig</a>

---

##### `putGuardrails` <a name="putGuardrails" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putGuardrails"></a>

```java
public void putGuardrails(ModelServingAiGatewayGuardrails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putGuardrails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a>

---

##### `putInferenceTableConfig` <a name="putInferenceTableConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putInferenceTableConfig"></a>

```java
public void putInferenceTableConfig(ModelServingAiGatewayInferenceTableConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putInferenceTableConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a>

---

##### `putRateLimits` <a name="putRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putRateLimits"></a>

```java
public void putRateLimits(IResolvable OR java.util.List<ModelServingAiGatewayRateLimits> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putRateLimits.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits">ModelServingAiGatewayRateLimits</a>>

---

##### `putUsageTrackingConfig` <a name="putUsageTrackingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putUsageTrackingConfig"></a>

```java
public void putUsageTrackingConfig(ModelServingAiGatewayUsageTrackingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putUsageTrackingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a>

---

##### `resetFallbackConfig` <a name="resetFallbackConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetFallbackConfig"></a>

```java
public void resetFallbackConfig()
```

##### `resetGuardrails` <a name="resetGuardrails" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetGuardrails"></a>

```java
public void resetGuardrails()
```

##### `resetInferenceTableConfig` <a name="resetInferenceTableConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetInferenceTableConfig"></a>

```java
public void resetInferenceTableConfig()
```

##### `resetRateLimits` <a name="resetRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetRateLimits"></a>

```java
public void resetRateLimits()
```

##### `resetUsageTrackingConfig` <a name="resetUsageTrackingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetUsageTrackingConfig"></a>

```java
public void resetUsageTrackingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.fallbackConfig">fallbackConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference">ModelServingAiGatewayFallbackConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.guardrails">guardrails</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference">ModelServingAiGatewayGuardrailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.inferenceTableConfig">inferenceTableConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference">ModelServingAiGatewayInferenceTableConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.rateLimits">rateLimits</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList">ModelServingAiGatewayRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.usageTrackingConfig">usageTrackingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference">ModelServingAiGatewayUsageTrackingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.fallbackConfigInput">fallbackConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig">ModelServingAiGatewayFallbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.guardrailsInput">guardrailsInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.inferenceTableConfigInput">inferenceTableConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.rateLimitsInput">rateLimitsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits">ModelServingAiGatewayRateLimits</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.usageTrackingConfigInput">usageTrackingConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fallbackConfig`<sup>Required</sup> <a name="fallbackConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.fallbackConfig"></a>

```java
public ModelServingAiGatewayFallbackConfigOutputReference getFallbackConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference">ModelServingAiGatewayFallbackConfigOutputReference</a>

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.guardrails"></a>

```java
public ModelServingAiGatewayGuardrailsOutputReference getGuardrails();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference">ModelServingAiGatewayGuardrailsOutputReference</a>

---

##### `inferenceTableConfig`<sup>Required</sup> <a name="inferenceTableConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.inferenceTableConfig"></a>

```java
public ModelServingAiGatewayInferenceTableConfigOutputReference getInferenceTableConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference">ModelServingAiGatewayInferenceTableConfigOutputReference</a>

---

##### `rateLimits`<sup>Required</sup> <a name="rateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.rateLimits"></a>

```java
public ModelServingAiGatewayRateLimitsList getRateLimits();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList">ModelServingAiGatewayRateLimitsList</a>

---

##### `usageTrackingConfig`<sup>Required</sup> <a name="usageTrackingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.usageTrackingConfig"></a>

```java
public ModelServingAiGatewayUsageTrackingConfigOutputReference getUsageTrackingConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference">ModelServingAiGatewayUsageTrackingConfigOutputReference</a>

---

##### `fallbackConfigInput`<sup>Optional</sup> <a name="fallbackConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.fallbackConfigInput"></a>

```java
public ModelServingAiGatewayFallbackConfig getFallbackConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig">ModelServingAiGatewayFallbackConfig</a>

---

##### `guardrailsInput`<sup>Optional</sup> <a name="guardrailsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.guardrailsInput"></a>

```java
public ModelServingAiGatewayGuardrails getGuardrailsInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a>

---

##### `inferenceTableConfigInput`<sup>Optional</sup> <a name="inferenceTableConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.inferenceTableConfigInput"></a>

```java
public ModelServingAiGatewayInferenceTableConfig getInferenceTableConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a>

---

##### `rateLimitsInput`<sup>Optional</sup> <a name="rateLimitsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.rateLimitsInput"></a>

```java
public java.lang.Object getRateLimitsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits">ModelServingAiGatewayRateLimits</a>>

---

##### `usageTrackingConfigInput`<sup>Optional</sup> <a name="usageTrackingConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.usageTrackingConfigInput"></a>

```java
public ModelServingAiGatewayUsageTrackingConfig getUsageTrackingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.internalValue"></a>

```java
public ModelServingAiGateway getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a>

---


### ModelServingAiGatewayRateLimitsList <a name="ModelServingAiGatewayRateLimitsList" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayRateLimitsList;

new ModelServingAiGatewayRateLimitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.get"></a>

```java
public ModelServingAiGatewayRateLimitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits">ModelServingAiGatewayRateLimits</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits">ModelServingAiGatewayRateLimits</a>>

---


### ModelServingAiGatewayRateLimitsOutputReference <a name="ModelServingAiGatewayRateLimitsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayRateLimitsOutputReference;

new ModelServingAiGatewayRateLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resetCalls">resetCalls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCalls` <a name="resetCalls" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resetCalls"></a>

```java
public void resetCalls()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resetPrincipal"></a>

```java
public void resetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.callsInput">callsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.renewalPeriodInput">renewalPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.calls">calls</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.renewalPeriod">renewalPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits">ModelServingAiGatewayRateLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `callsInput`<sup>Optional</sup> <a name="callsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.callsInput"></a>

```java
public java.lang.Number getCallsInput();
```

- *Type:* java.lang.Number

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `renewalPeriodInput`<sup>Optional</sup> <a name="renewalPeriodInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.renewalPeriodInput"></a>

```java
public java.lang.String getRenewalPeriodInput();
```

- *Type:* java.lang.String

---

##### `calls`<sup>Required</sup> <a name="calls" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.calls"></a>

```java
public java.lang.Number getCalls();
```

- *Type:* java.lang.Number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.renewalPeriod"></a>

```java
public java.lang.String getRenewalPeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits">ModelServingAiGatewayRateLimits</a>

---


### ModelServingAiGatewayUsageTrackingConfigOutputReference <a name="ModelServingAiGatewayUsageTrackingConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingAiGatewayUsageTrackingConfigOutputReference;

new ModelServingAiGatewayUsageTrackingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.internalValue"></a>

```java
public ModelServingAiGatewayUsageTrackingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a>

---


### ModelServingConfigAOutputReference <a name="ModelServingConfigAOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigAOutputReference;

new ModelServingConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putAutoCaptureConfig">putAutoCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedEntities">putServedEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedModels">putServedModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putTrafficConfig">putTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetAutoCaptureConfig">resetAutoCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetServedEntities">resetServedEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetServedModels">resetServedModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetTrafficConfig">resetTrafficConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoCaptureConfig` <a name="putAutoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putAutoCaptureConfig"></a>

```java
public void putAutoCaptureConfig(ModelServingConfigAutoCaptureConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putAutoCaptureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a>

---

##### `putServedEntities` <a name="putServedEntities" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedEntities"></a>

```java
public void putServedEntities(IResolvable OR java.util.List<ModelServingConfigServedEntities> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedEntities.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities">ModelServingConfigServedEntities</a>>

---

##### `putServedModels` <a name="putServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedModels"></a>

```java
public void putServedModels(IResolvable OR java.util.List<ModelServingConfigServedModels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedModels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>>

---

##### `putTrafficConfig` <a name="putTrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putTrafficConfig"></a>

```java
public void putTrafficConfig(ModelServingConfigTrafficConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putTrafficConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

---

##### `resetAutoCaptureConfig` <a name="resetAutoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetAutoCaptureConfig"></a>

```java
public void resetAutoCaptureConfig()
```

##### `resetServedEntities` <a name="resetServedEntities" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetServedEntities"></a>

```java
public void resetServedEntities()
```

##### `resetServedModels` <a name="resetServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetServedModels"></a>

```java
public void resetServedModels()
```

##### `resetTrafficConfig` <a name="resetTrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetTrafficConfig"></a>

```java
public void resetTrafficConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.autoCaptureConfig">autoCaptureConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference">ModelServingConfigAutoCaptureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedEntities">servedEntities</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList">ModelServingConfigServedEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModels">servedModels</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList">ModelServingConfigServedModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfig">trafficConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference">ModelServingConfigTrafficConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.autoCaptureConfigInput">autoCaptureConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedEntitiesInput">servedEntitiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities">ModelServingConfigServedEntities</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModelsInput">servedModelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfigInput">trafficConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoCaptureConfig`<sup>Required</sup> <a name="autoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.autoCaptureConfig"></a>

```java
public ModelServingConfigAutoCaptureConfigOutputReference getAutoCaptureConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference">ModelServingConfigAutoCaptureConfigOutputReference</a>

---

##### `servedEntities`<sup>Required</sup> <a name="servedEntities" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedEntities"></a>

```java
public ModelServingConfigServedEntitiesList getServedEntities();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList">ModelServingConfigServedEntitiesList</a>

---

##### `servedModels`<sup>Required</sup> <a name="servedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModels"></a>

```java
public ModelServingConfigServedModelsList getServedModels();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList">ModelServingConfigServedModelsList</a>

---

##### `trafficConfig`<sup>Required</sup> <a name="trafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfig"></a>

```java
public ModelServingConfigTrafficConfigOutputReference getTrafficConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference">ModelServingConfigTrafficConfigOutputReference</a>

---

##### `autoCaptureConfigInput`<sup>Optional</sup> <a name="autoCaptureConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.autoCaptureConfigInput"></a>

```java
public ModelServingConfigAutoCaptureConfig getAutoCaptureConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a>

---

##### `servedEntitiesInput`<sup>Optional</sup> <a name="servedEntitiesInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedEntitiesInput"></a>

```java
public java.lang.Object getServedEntitiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities">ModelServingConfigServedEntities</a>>

---

##### `servedModelsInput`<sup>Optional</sup> <a name="servedModelsInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModelsInput"></a>

```java
public java.lang.Object getServedModelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>>

---

##### `trafficConfigInput`<sup>Optional</sup> <a name="trafficConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfigInput"></a>

```java
public ModelServingConfigTrafficConfig getTrafficConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.internalValue"></a>

```java
public ModelServingConfigA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

---


### ModelServingConfigAutoCaptureConfigOutputReference <a name="ModelServingConfigAutoCaptureConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigAutoCaptureConfigOutputReference;

new ModelServingConfigAutoCaptureConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetTableNamePrefix">resetTableNamePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetCatalogName"></a>

```java
public void resetCatalogName()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```

##### `resetTableNamePrefix` <a name="resetTableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetTableNamePrefix"></a>

```java
public void resetTableNamePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.tableNamePrefixInput">tableNamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.tableNamePrefix">tableNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `tableNamePrefixInput`<sup>Optional</sup> <a name="tableNamePrefixInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.tableNamePrefixInput"></a>

```java
public java.lang.String getTableNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.tableNamePrefix"></a>

```java
public java.lang.String getTableNamePrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.internalValue"></a>

```java
public ModelServingConfigAutoCaptureConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference;

new ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resetAi21LabsApiKey">resetAi21LabsApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resetAi21LabsApiKeyPlaintext">resetAi21LabsApiKeyPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAi21LabsApiKey` <a name="resetAi21LabsApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resetAi21LabsApiKey"></a>

```java
public void resetAi21LabsApiKey()
```

##### `resetAi21LabsApiKeyPlaintext` <a name="resetAi21LabsApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resetAi21LabsApiKeyPlaintext"></a>

```java
public void resetAi21LabsApiKeyPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyInput">ai21LabsApiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyPlaintextInput">ai21LabsApiKeyPlaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKey">ai21LabsApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyPlaintext">ai21LabsApiKeyPlaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ai21LabsApiKeyInput`<sup>Optional</sup> <a name="ai21LabsApiKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyInput"></a>

```java
public java.lang.String getAi21LabsApiKeyInput();
```

- *Type:* java.lang.String

---

##### `ai21LabsApiKeyPlaintextInput`<sup>Optional</sup> <a name="ai21LabsApiKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyPlaintextInput"></a>

```java
public java.lang.String getAi21LabsApiKeyPlaintextInput();
```

- *Type:* java.lang.String

---

##### `ai21LabsApiKey`<sup>Required</sup> <a name="ai21LabsApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKey"></a>

```java
public java.lang.String getAi21LabsApiKey();
```

- *Type:* java.lang.String

---

##### `ai21LabsApiKeyPlaintext`<sup>Required</sup> <a name="ai21LabsApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyPlaintext"></a>

```java
public java.lang.String getAi21LabsApiKeyPlaintext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.internalValue"></a>

```java
public ModelServingConfigServedEntitiesExternalModelAi21LabsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference;

new ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsAccessKeyId">resetAwsAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsAccessKeyIdPlaintext">resetAwsAccessKeyIdPlaintext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsSecretAccessKey">resetAwsSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsSecretAccessKeyPlaintext">resetAwsSecretAccessKeyPlaintext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsAccessKeyId` <a name="resetAwsAccessKeyId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsAccessKeyId"></a>

```java
public void resetAwsAccessKeyId()
```

##### `resetAwsAccessKeyIdPlaintext` <a name="resetAwsAccessKeyIdPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsAccessKeyIdPlaintext"></a>

```java
public void resetAwsAccessKeyIdPlaintext()
```

##### `resetAwsSecretAccessKey` <a name="resetAwsSecretAccessKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsSecretAccessKey"></a>

```java
public void resetAwsSecretAccessKey()
```

##### `resetAwsSecretAccessKeyPlaintext` <a name="resetAwsSecretAccessKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsSecretAccessKeyPlaintext"></a>

```java
public void resetAwsSecretAccessKeyPlaintext()
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetInstanceProfileArn"></a>

```java
public void resetInstanceProfileArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdInput">awsAccessKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdPlaintextInput">awsAccessKeyIdPlaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyInput">awsSecretAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyPlaintextInput">awsSecretAccessKeyPlaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.bedrockProviderInput">bedrockProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyId">awsAccessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdPlaintext">awsAccessKeyIdPlaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKey">awsSecretAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyPlaintext">awsSecretAccessKeyPlaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.bedrockProvider">bedrockProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsAccessKeyIdInput`<sup>Optional</sup> <a name="awsAccessKeyIdInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdInput"></a>

```java
public java.lang.String getAwsAccessKeyIdInput();
```

- *Type:* java.lang.String

---

##### `awsAccessKeyIdPlaintextInput`<sup>Optional</sup> <a name="awsAccessKeyIdPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdPlaintextInput"></a>

```java
public java.lang.String getAwsAccessKeyIdPlaintextInput();
```

- *Type:* java.lang.String

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `awsSecretAccessKeyInput`<sup>Optional</sup> <a name="awsSecretAccessKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyInput"></a>

```java
public java.lang.String getAwsSecretAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `awsSecretAccessKeyPlaintextInput`<sup>Optional</sup> <a name="awsSecretAccessKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyPlaintextInput"></a>

```java
public java.lang.String getAwsSecretAccessKeyPlaintextInput();
```

- *Type:* java.lang.String

---

##### `bedrockProviderInput`<sup>Optional</sup> <a name="bedrockProviderInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.bedrockProviderInput"></a>

```java
public java.lang.String getBedrockProviderInput();
```

- *Type:* java.lang.String

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.instanceProfileArnInput"></a>

```java
public java.lang.String getInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `awsAccessKeyId`<sup>Required</sup> <a name="awsAccessKeyId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyId"></a>

```java
public java.lang.String getAwsAccessKeyId();
```

- *Type:* java.lang.String

---

##### `awsAccessKeyIdPlaintext`<sup>Required</sup> <a name="awsAccessKeyIdPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdPlaintext"></a>

```java
public java.lang.String getAwsAccessKeyIdPlaintext();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `awsSecretAccessKey`<sup>Required</sup> <a name="awsSecretAccessKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKey"></a>

```java
public java.lang.String getAwsSecretAccessKey();
```

- *Type:* java.lang.String

---

##### `awsSecretAccessKeyPlaintext`<sup>Required</sup> <a name="awsSecretAccessKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyPlaintext"></a>

```java
public java.lang.String getAwsSecretAccessKeyPlaintext();
```

- *Type:* java.lang.String

---

##### `bedrockProvider`<sup>Required</sup> <a name="bedrockProvider" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.bedrockProvider"></a>

```java
public java.lang.String getBedrockProvider();
```

- *Type:* java.lang.String

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.internalValue"></a>

```java
public ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference;

new ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resetAnthropicApiKey">resetAnthropicApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resetAnthropicApiKeyPlaintext">resetAnthropicApiKeyPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnthropicApiKey` <a name="resetAnthropicApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resetAnthropicApiKey"></a>

```java
public void resetAnthropicApiKey()
```

##### `resetAnthropicApiKeyPlaintext` <a name="resetAnthropicApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resetAnthropicApiKeyPlaintext"></a>

```java
public void resetAnthropicApiKeyPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyInput">anthropicApiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyPlaintextInput">anthropicApiKeyPlaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKey">anthropicApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyPlaintext">anthropicApiKeyPlaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `anthropicApiKeyInput`<sup>Optional</sup> <a name="anthropicApiKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyInput"></a>

```java
public java.lang.String getAnthropicApiKeyInput();
```

- *Type:* java.lang.String

---

##### `anthropicApiKeyPlaintextInput`<sup>Optional</sup> <a name="anthropicApiKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyPlaintextInput"></a>

```java
public java.lang.String getAnthropicApiKeyPlaintextInput();
```

- *Type:* java.lang.String

---

##### `anthropicApiKey`<sup>Required</sup> <a name="anthropicApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKey"></a>

```java
public java.lang.String getAnthropicApiKey();
```

- *Type:* java.lang.String

---

##### `anthropicApiKeyPlaintext`<sup>Required</sup> <a name="anthropicApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyPlaintext"></a>

```java
public java.lang.String getAnthropicApiKeyPlaintext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.internalValue"></a>

```java
public ModelServingConfigServedEntitiesExternalModelAnthropicConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference;

new ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiBase">resetCohereApiBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiKey">resetCohereApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiKeyPlaintext">resetCohereApiKeyPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCohereApiBase` <a name="resetCohereApiBase" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiBase"></a>

```java
public void resetCohereApiBase()
```

##### `resetCohereApiKey` <a name="resetCohereApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiKey"></a>

```java
public void resetCohereApiKey()
```

##### `resetCohereApiKeyPlaintext` <a name="resetCohereApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiKeyPlaintext"></a>

```java
public void resetCohereApiKeyPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiBaseInput">cohereApiBaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyInput">cohereApiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyPlaintextInput">cohereApiKeyPlaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiBase">cohereApiBase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKey">cohereApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyPlaintext">cohereApiKeyPlaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cohereApiBaseInput`<sup>Optional</sup> <a name="cohereApiBaseInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiBaseInput"></a>

```java
public java.lang.String getCohereApiBaseInput();
```

- *Type:* java.lang.String

---

##### `cohereApiKeyInput`<sup>Optional</sup> <a name="cohereApiKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyInput"></a>

```java
public java.lang.String getCohereApiKeyInput();
```

- *Type:* java.lang.String

---

##### `cohereApiKeyPlaintextInput`<sup>Optional</sup> <a name="cohereApiKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyPlaintextInput"></a>

```java
public java.lang.String getCohereApiKeyPlaintextInput();
```

- *Type:* java.lang.String

---

##### `cohereApiBase`<sup>Required</sup> <a name="cohereApiBase" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiBase"></a>

```java
public java.lang.String getCohereApiBase();
```

- *Type:* java.lang.String

---

##### `cohereApiKey`<sup>Required</sup> <a name="cohereApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKey"></a>

```java
public java.lang.String getCohereApiKey();
```

- *Type:* java.lang.String

---

##### `cohereApiKeyPlaintext`<sup>Required</sup> <a name="cohereApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyPlaintext"></a>

```java
public java.lang.String getCohereApiKeyPlaintext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.internalValue"></a>

```java
public ModelServingConfigServedEntitiesExternalModelCohereConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference <a name="ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference;

new ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.resetValuePlaintext">resetValuePlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetValuePlaintext` <a name="resetValuePlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.resetValuePlaintext"></a>

```java
public void resetValuePlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.valuePlaintextInput">valuePlaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.valuePlaintext">valuePlaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `valuePlaintextInput`<sup>Optional</sup> <a name="valuePlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.valuePlaintextInput"></a>

```java
public java.lang.String getValuePlaintextInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `valuePlaintext`<sup>Required</sup> <a name="valuePlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.valuePlaintext"></a>

```java
public java.lang.String getValuePlaintext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.internalValue"></a>

```java
public ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth</a>

---


### ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference <a name="ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference;

new ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.resetTokenPlaintext">resetTokenPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToken` <a name="resetToken" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.resetToken"></a>

```java
public void resetToken()
```

##### `resetTokenPlaintext` <a name="resetTokenPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.resetTokenPlaintext"></a>

```java
public void resetTokenPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.tokenPlaintextInput">tokenPlaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.tokenPlaintext">tokenPlaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `tokenPlaintextInput`<sup>Optional</sup> <a name="tokenPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.tokenPlaintextInput"></a>

```java
public java.lang.String getTokenPlaintextInput();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `tokenPlaintext`<sup>Required</sup> <a name="tokenPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.tokenPlaintext"></a>

```java
public java.lang.String getTokenPlaintext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.internalValue"></a>

```java
public ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth</a>

---


### ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference;

new ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.putApiKeyAuth">putApiKeyAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.putBearerTokenAuth">putBearerTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.resetApiKeyAuth">resetApiKeyAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.resetBearerTokenAuth">resetBearerTokenAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyAuth` <a name="putApiKeyAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.putApiKeyAuth"></a>

```java
public void putApiKeyAuth(ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.putApiKeyAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth</a>

---

##### `putBearerTokenAuth` <a name="putBearerTokenAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.putBearerTokenAuth"></a>

```java
public void putBearerTokenAuth(ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.putBearerTokenAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth</a>

---

##### `resetApiKeyAuth` <a name="resetApiKeyAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.resetApiKeyAuth"></a>

```java
public void resetApiKeyAuth()
```

##### `resetBearerTokenAuth` <a name="resetBearerTokenAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.resetBearerTokenAuth"></a>

```java
public void resetBearerTokenAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.apiKeyAuth">apiKeyAuth</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.bearerTokenAuth">bearerTokenAuth</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.apiKeyAuthInput">apiKeyAuthInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.bearerTokenAuthInput">bearerTokenAuthInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.customProviderUrlInput">customProviderUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.customProviderUrl">customProviderUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig">ModelServingConfigServedEntitiesExternalModelCustomProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyAuth`<sup>Required</sup> <a name="apiKeyAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.apiKeyAuth"></a>

```java
public ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference getApiKeyAuth();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference</a>

---

##### `bearerTokenAuth`<sup>Required</sup> <a name="bearerTokenAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.bearerTokenAuth"></a>

```java
public ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference getBearerTokenAuth();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference</a>

---

##### `apiKeyAuthInput`<sup>Optional</sup> <a name="apiKeyAuthInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.apiKeyAuthInput"></a>

```java
public ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth getApiKeyAuthInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth</a>

---

##### `bearerTokenAuthInput`<sup>Optional</sup> <a name="bearerTokenAuthInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.bearerTokenAuthInput"></a>

```java
public ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth getBearerTokenAuthInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth</a>

---

##### `customProviderUrlInput`<sup>Optional</sup> <a name="customProviderUrlInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.customProviderUrlInput"></a>

```java
public java.lang.String getCustomProviderUrlInput();
```

- *Type:* java.lang.String

---

##### `customProviderUrl`<sup>Required</sup> <a name="customProviderUrl" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.customProviderUrl"></a>

```java
public java.lang.String getCustomProviderUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.internalValue"></a>

```java
public ModelServingConfigServedEntitiesExternalModelCustomProviderConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig">ModelServingConfigServedEntitiesExternalModelCustomProviderConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference;

new ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resetDatabricksApiToken">resetDatabricksApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resetDatabricksApiTokenPlaintext">resetDatabricksApiTokenPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabricksApiToken` <a name="resetDatabricksApiToken" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resetDatabricksApiToken"></a>

```java
public void resetDatabricksApiToken()
```

##### `resetDatabricksApiTokenPlaintext` <a name="resetDatabricksApiTokenPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resetDatabricksApiTokenPlaintext"></a>

```java
public void resetDatabricksApiTokenPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenInput">databricksApiTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenPlaintextInput">databricksApiTokenPlaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksWorkspaceUrlInput">databricksWorkspaceUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiToken">databricksApiToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenPlaintext">databricksApiTokenPlaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksWorkspaceUrl">databricksWorkspaceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databricksApiTokenInput`<sup>Optional</sup> <a name="databricksApiTokenInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenInput"></a>

```java
public java.lang.String getDatabricksApiTokenInput();
```

- *Type:* java.lang.String

---

##### `databricksApiTokenPlaintextInput`<sup>Optional</sup> <a name="databricksApiTokenPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenPlaintextInput"></a>

```java
public java.lang.String getDatabricksApiTokenPlaintextInput();
```

- *Type:* java.lang.String

---

##### `databricksWorkspaceUrlInput`<sup>Optional</sup> <a name="databricksWorkspaceUrlInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksWorkspaceUrlInput"></a>

```java
public java.lang.String getDatabricksWorkspaceUrlInput();
```

- *Type:* java.lang.String

---

##### `databricksApiToken`<sup>Required</sup> <a name="databricksApiToken" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiToken"></a>

```java
public java.lang.String getDatabricksApiToken();
```

- *Type:* java.lang.String

---

##### `databricksApiTokenPlaintext`<sup>Required</sup> <a name="databricksApiTokenPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenPlaintext"></a>

```java
public java.lang.String getDatabricksApiTokenPlaintext();
```

- *Type:* java.lang.String

---

##### `databricksWorkspaceUrl`<sup>Required</sup> <a name="databricksWorkspaceUrl" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksWorkspaceUrl"></a>

```java
public java.lang.String getDatabricksWorkspaceUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.internalValue"></a>

```java
public ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference;

new ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetPrivateKeyPlaintext">resetPrivateKeyPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetPrivateKey"></a>

```java
public void resetPrivateKey()
```

##### `resetPrivateKeyPlaintext` <a name="resetPrivateKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetPrivateKeyPlaintext"></a>

```java
public void resetPrivateKeyPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyPlaintextInput">privateKeyPlaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyPlaintext">privateKeyPlaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `privateKeyPlaintextInput`<sup>Optional</sup> <a name="privateKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyPlaintextInput"></a>

```java
public java.lang.String getPrivateKeyPlaintextInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `privateKeyPlaintext`<sup>Required</sup> <a name="privateKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyPlaintext"></a>

```java
public java.lang.String getPrivateKeyPlaintext();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.internalValue"></a>

```java
public ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference;

new ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientId">resetMicrosoftEntraClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientSecret">resetMicrosoftEntraClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientSecretPlaintext">resetMicrosoftEntraClientSecretPlaintext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraTenantId">resetMicrosoftEntraTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiBase">resetOpenaiApiBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiKey">resetOpenaiApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiKeyPlaintext">resetOpenaiApiKeyPlaintext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiType">resetOpenaiApiType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiVersion">resetOpenaiApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiDeploymentName">resetOpenaiDeploymentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiOrganization">resetOpenaiOrganization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMicrosoftEntraClientId` <a name="resetMicrosoftEntraClientId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientId"></a>

```java
public void resetMicrosoftEntraClientId()
```

##### `resetMicrosoftEntraClientSecret` <a name="resetMicrosoftEntraClientSecret" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientSecret"></a>

```java
public void resetMicrosoftEntraClientSecret()
```

##### `resetMicrosoftEntraClientSecretPlaintext` <a name="resetMicrosoftEntraClientSecretPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientSecretPlaintext"></a>

```java
public void resetMicrosoftEntraClientSecretPlaintext()
```

##### `resetMicrosoftEntraTenantId` <a name="resetMicrosoftEntraTenantId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraTenantId"></a>

```java
public void resetMicrosoftEntraTenantId()
```

##### `resetOpenaiApiBase` <a name="resetOpenaiApiBase" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiBase"></a>

```java
public void resetOpenaiApiBase()
```

##### `resetOpenaiApiKey` <a name="resetOpenaiApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiKey"></a>

```java
public void resetOpenaiApiKey()
```

##### `resetOpenaiApiKeyPlaintext` <a name="resetOpenaiApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiKeyPlaintext"></a>

```java
public void resetOpenaiApiKeyPlaintext()
```

##### `resetOpenaiApiType` <a name="resetOpenaiApiType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiType"></a>

```java
public void resetOpenaiApiType()
```

##### `resetOpenaiApiVersion` <a name="resetOpenaiApiVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiVersion"></a>

```java
public void resetOpenaiApiVersion()
```

##### `resetOpenaiDeploymentName` <a name="resetOpenaiDeploymentName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiDeploymentName"></a>

```java
public void resetOpenaiDeploymentName()
```

##### `resetOpenaiOrganization` <a name="resetOpenaiOrganization" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiOrganization"></a>

```java
public void resetOpenaiOrganization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientIdInput">microsoftEntraClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretInput">microsoftEntraClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretPlaintextInput">microsoftEntraClientSecretPlaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraTenantIdInput">microsoftEntraTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiBaseInput">openaiApiBaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyInput">openaiApiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyPlaintextInput">openaiApiKeyPlaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiTypeInput">openaiApiTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiVersionInput">openaiApiVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiDeploymentNameInput">openaiDeploymentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiOrganizationInput">openaiOrganizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientId">microsoftEntraClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecret">microsoftEntraClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretPlaintext">microsoftEntraClientSecretPlaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraTenantId">microsoftEntraTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiBase">openaiApiBase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKey">openaiApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyPlaintext">openaiApiKeyPlaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiType">openaiApiType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiVersion">openaiApiVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiDeploymentName">openaiDeploymentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiOrganization">openaiOrganization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `microsoftEntraClientIdInput`<sup>Optional</sup> <a name="microsoftEntraClientIdInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientIdInput"></a>

```java
public java.lang.String getMicrosoftEntraClientIdInput();
```

- *Type:* java.lang.String

---

##### `microsoftEntraClientSecretInput`<sup>Optional</sup> <a name="microsoftEntraClientSecretInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretInput"></a>

```java
public java.lang.String getMicrosoftEntraClientSecretInput();
```

- *Type:* java.lang.String

---

##### `microsoftEntraClientSecretPlaintextInput`<sup>Optional</sup> <a name="microsoftEntraClientSecretPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretPlaintextInput"></a>

```java
public java.lang.String getMicrosoftEntraClientSecretPlaintextInput();
```

- *Type:* java.lang.String

---

##### `microsoftEntraTenantIdInput`<sup>Optional</sup> <a name="microsoftEntraTenantIdInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraTenantIdInput"></a>

```java
public java.lang.String getMicrosoftEntraTenantIdInput();
```

- *Type:* java.lang.String

---

##### `openaiApiBaseInput`<sup>Optional</sup> <a name="openaiApiBaseInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiBaseInput"></a>

```java
public java.lang.String getOpenaiApiBaseInput();
```

- *Type:* java.lang.String

---

##### `openaiApiKeyInput`<sup>Optional</sup> <a name="openaiApiKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyInput"></a>

```java
public java.lang.String getOpenaiApiKeyInput();
```

- *Type:* java.lang.String

---

##### `openaiApiKeyPlaintextInput`<sup>Optional</sup> <a name="openaiApiKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyPlaintextInput"></a>

```java
public java.lang.String getOpenaiApiKeyPlaintextInput();
```

- *Type:* java.lang.String

---

##### `openaiApiTypeInput`<sup>Optional</sup> <a name="openaiApiTypeInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiTypeInput"></a>

```java
public java.lang.String getOpenaiApiTypeInput();
```

- *Type:* java.lang.String

---

##### `openaiApiVersionInput`<sup>Optional</sup> <a name="openaiApiVersionInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiVersionInput"></a>

```java
public java.lang.String getOpenaiApiVersionInput();
```

- *Type:* java.lang.String

---

##### `openaiDeploymentNameInput`<sup>Optional</sup> <a name="openaiDeploymentNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiDeploymentNameInput"></a>

```java
public java.lang.String getOpenaiDeploymentNameInput();
```

- *Type:* java.lang.String

---

##### `openaiOrganizationInput`<sup>Optional</sup> <a name="openaiOrganizationInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiOrganizationInput"></a>

```java
public java.lang.String getOpenaiOrganizationInput();
```

- *Type:* java.lang.String

---

##### `microsoftEntraClientId`<sup>Required</sup> <a name="microsoftEntraClientId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientId"></a>

```java
public java.lang.String getMicrosoftEntraClientId();
```

- *Type:* java.lang.String

---

##### `microsoftEntraClientSecret`<sup>Required</sup> <a name="microsoftEntraClientSecret" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecret"></a>

```java
public java.lang.String getMicrosoftEntraClientSecret();
```

- *Type:* java.lang.String

---

##### `microsoftEntraClientSecretPlaintext`<sup>Required</sup> <a name="microsoftEntraClientSecretPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretPlaintext"></a>

```java
public java.lang.String getMicrosoftEntraClientSecretPlaintext();
```

- *Type:* java.lang.String

---

##### `microsoftEntraTenantId`<sup>Required</sup> <a name="microsoftEntraTenantId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraTenantId"></a>

```java
public java.lang.String getMicrosoftEntraTenantId();
```

- *Type:* java.lang.String

---

##### `openaiApiBase`<sup>Required</sup> <a name="openaiApiBase" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiBase"></a>

```java
public java.lang.String getOpenaiApiBase();
```

- *Type:* java.lang.String

---

##### `openaiApiKey`<sup>Required</sup> <a name="openaiApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKey"></a>

```java
public java.lang.String getOpenaiApiKey();
```

- *Type:* java.lang.String

---

##### `openaiApiKeyPlaintext`<sup>Required</sup> <a name="openaiApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyPlaintext"></a>

```java
public java.lang.String getOpenaiApiKeyPlaintext();
```

- *Type:* java.lang.String

---

##### `openaiApiType`<sup>Required</sup> <a name="openaiApiType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiType"></a>

```java
public java.lang.String getOpenaiApiType();
```

- *Type:* java.lang.String

---

##### `openaiApiVersion`<sup>Required</sup> <a name="openaiApiVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiVersion"></a>

```java
public java.lang.String getOpenaiApiVersion();
```

- *Type:* java.lang.String

---

##### `openaiDeploymentName`<sup>Required</sup> <a name="openaiDeploymentName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiDeploymentName"></a>

```java
public java.lang.String getOpenaiDeploymentName();
```

- *Type:* java.lang.String

---

##### `openaiOrganization`<sup>Required</sup> <a name="openaiOrganization" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiOrganization"></a>

```java
public java.lang.String getOpenaiOrganization();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.internalValue"></a>

```java
public ModelServingConfigServedEntitiesExternalModelOpenaiConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelOutputReference <a name="ModelServingConfigServedEntitiesExternalModelOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelOutputReference;

new ModelServingConfigServedEntitiesExternalModelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAi21LabsConfig">putAi21LabsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAmazonBedrockConfig">putAmazonBedrockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAnthropicConfig">putAnthropicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putCohereConfig">putCohereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putCustomProviderConfig">putCustomProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putDatabricksModelServingConfig">putDatabricksModelServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putGoogleCloudVertexAiConfig">putGoogleCloudVertexAiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putOpenaiConfig">putOpenaiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putPalmConfig">putPalmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetAi21LabsConfig">resetAi21LabsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetAmazonBedrockConfig">resetAmazonBedrockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetAnthropicConfig">resetAnthropicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetCohereConfig">resetCohereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetCustomProviderConfig">resetCustomProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetDatabricksModelServingConfig">resetDatabricksModelServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetGoogleCloudVertexAiConfig">resetGoogleCloudVertexAiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetOpenaiConfig">resetOpenaiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetPalmConfig">resetPalmConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAi21LabsConfig` <a name="putAi21LabsConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAi21LabsConfig"></a>

```java
public void putAi21LabsConfig(ModelServingConfigServedEntitiesExternalModelAi21LabsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAi21LabsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a>

---

##### `putAmazonBedrockConfig` <a name="putAmazonBedrockConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAmazonBedrockConfig"></a>

```java
public void putAmazonBedrockConfig(ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAmazonBedrockConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a>

---

##### `putAnthropicConfig` <a name="putAnthropicConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAnthropicConfig"></a>

```java
public void putAnthropicConfig(ModelServingConfigServedEntitiesExternalModelAnthropicConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAnthropicConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a>

---

##### `putCohereConfig` <a name="putCohereConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putCohereConfig"></a>

```java
public void putCohereConfig(ModelServingConfigServedEntitiesExternalModelCohereConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putCohereConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a>

---

##### `putCustomProviderConfig` <a name="putCustomProviderConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putCustomProviderConfig"></a>

```java
public void putCustomProviderConfig(ModelServingConfigServedEntitiesExternalModelCustomProviderConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putCustomProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig">ModelServingConfigServedEntitiesExternalModelCustomProviderConfig</a>

---

##### `putDatabricksModelServingConfig` <a name="putDatabricksModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putDatabricksModelServingConfig"></a>

```java
public void putDatabricksModelServingConfig(ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putDatabricksModelServingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a>

---

##### `putGoogleCloudVertexAiConfig` <a name="putGoogleCloudVertexAiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putGoogleCloudVertexAiConfig"></a>

```java
public void putGoogleCloudVertexAiConfig(ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putGoogleCloudVertexAiConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a>

---

##### `putOpenaiConfig` <a name="putOpenaiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putOpenaiConfig"></a>

```java
public void putOpenaiConfig(ModelServingConfigServedEntitiesExternalModelOpenaiConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putOpenaiConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a>

---

##### `putPalmConfig` <a name="putPalmConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putPalmConfig"></a>

```java
public void putPalmConfig(ModelServingConfigServedEntitiesExternalModelPalmConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putPalmConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a>

---

##### `resetAi21LabsConfig` <a name="resetAi21LabsConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetAi21LabsConfig"></a>

```java
public void resetAi21LabsConfig()
```

##### `resetAmazonBedrockConfig` <a name="resetAmazonBedrockConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetAmazonBedrockConfig"></a>

```java
public void resetAmazonBedrockConfig()
```

##### `resetAnthropicConfig` <a name="resetAnthropicConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetAnthropicConfig"></a>

```java
public void resetAnthropicConfig()
```

##### `resetCohereConfig` <a name="resetCohereConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetCohereConfig"></a>

```java
public void resetCohereConfig()
```

##### `resetCustomProviderConfig` <a name="resetCustomProviderConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetCustomProviderConfig"></a>

```java
public void resetCustomProviderConfig()
```

##### `resetDatabricksModelServingConfig` <a name="resetDatabricksModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetDatabricksModelServingConfig"></a>

```java
public void resetDatabricksModelServingConfig()
```

##### `resetGoogleCloudVertexAiConfig` <a name="resetGoogleCloudVertexAiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetGoogleCloudVertexAiConfig"></a>

```java
public void resetGoogleCloudVertexAiConfig()
```

##### `resetOpenaiConfig` <a name="resetOpenaiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetOpenaiConfig"></a>

```java
public void resetOpenaiConfig()
```

##### `resetPalmConfig` <a name="resetPalmConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetPalmConfig"></a>

```java
public void resetPalmConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.ai21LabsConfig">ai21LabsConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference">ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.amazonBedrockConfig">amazonBedrockConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.anthropicConfig">anthropicConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference">ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.cohereConfig">cohereConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference">ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.customProviderConfig">customProviderConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.databricksModelServingConfig">databricksModelServingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.googleCloudVertexAiConfig">googleCloudVertexAiConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.openaiConfig">openaiConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference">ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.palmConfig">palmConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference">ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.ai21LabsConfigInput">ai21LabsConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.amazonBedrockConfigInput">amazonBedrockConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.anthropicConfigInput">anthropicConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.cohereConfigInput">cohereConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.customProviderConfigInput">customProviderConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig">ModelServingConfigServedEntitiesExternalModelCustomProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.databricksModelServingConfigInput">databricksModelServingConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.googleCloudVertexAiConfigInput">googleCloudVertexAiConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.openaiConfigInput">openaiConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.palmConfigInput">palmConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.providerInput">providerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.taskInput">taskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.provider">provider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.task">task</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ai21LabsConfig`<sup>Required</sup> <a name="ai21LabsConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.ai21LabsConfig"></a>

```java
public ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference getAi21LabsConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference">ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference</a>

---

##### `amazonBedrockConfig`<sup>Required</sup> <a name="amazonBedrockConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.amazonBedrockConfig"></a>

```java
public ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference getAmazonBedrockConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference</a>

---

##### `anthropicConfig`<sup>Required</sup> <a name="anthropicConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.anthropicConfig"></a>

```java
public ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference getAnthropicConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference">ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference</a>

---

##### `cohereConfig`<sup>Required</sup> <a name="cohereConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.cohereConfig"></a>

```java
public ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference getCohereConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference">ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference</a>

---

##### `customProviderConfig`<sup>Required</sup> <a name="customProviderConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.customProviderConfig"></a>

```java
public ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference getCustomProviderConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference</a>

---

##### `databricksModelServingConfig`<sup>Required</sup> <a name="databricksModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.databricksModelServingConfig"></a>

```java
public ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference getDatabricksModelServingConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference</a>

---

##### `googleCloudVertexAiConfig`<sup>Required</sup> <a name="googleCloudVertexAiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.googleCloudVertexAiConfig"></a>

```java
public ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference getGoogleCloudVertexAiConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference</a>

---

##### `openaiConfig`<sup>Required</sup> <a name="openaiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.openaiConfig"></a>

```java
public ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference getOpenaiConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference">ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference</a>

---

##### `palmConfig`<sup>Required</sup> <a name="palmConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.palmConfig"></a>

```java
public ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference getPalmConfig();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference">ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference</a>

---

##### `ai21LabsConfigInput`<sup>Optional</sup> <a name="ai21LabsConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.ai21LabsConfigInput"></a>

```java
public ModelServingConfigServedEntitiesExternalModelAi21LabsConfig getAi21LabsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a>

---

##### `amazonBedrockConfigInput`<sup>Optional</sup> <a name="amazonBedrockConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.amazonBedrockConfigInput"></a>

```java
public ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig getAmazonBedrockConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a>

---

##### `anthropicConfigInput`<sup>Optional</sup> <a name="anthropicConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.anthropicConfigInput"></a>

```java
public ModelServingConfigServedEntitiesExternalModelAnthropicConfig getAnthropicConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a>

---

##### `cohereConfigInput`<sup>Optional</sup> <a name="cohereConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.cohereConfigInput"></a>

```java
public ModelServingConfigServedEntitiesExternalModelCohereConfig getCohereConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a>

---

##### `customProviderConfigInput`<sup>Optional</sup> <a name="customProviderConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.customProviderConfigInput"></a>

```java
public ModelServingConfigServedEntitiesExternalModelCustomProviderConfig getCustomProviderConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig">ModelServingConfigServedEntitiesExternalModelCustomProviderConfig</a>

---

##### `databricksModelServingConfigInput`<sup>Optional</sup> <a name="databricksModelServingConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.databricksModelServingConfigInput"></a>

```java
public ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig getDatabricksModelServingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a>

---

##### `googleCloudVertexAiConfigInput`<sup>Optional</sup> <a name="googleCloudVertexAiConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.googleCloudVertexAiConfigInput"></a>

```java
public ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig getGoogleCloudVertexAiConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `openaiConfigInput`<sup>Optional</sup> <a name="openaiConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.openaiConfigInput"></a>

```java
public ModelServingConfigServedEntitiesExternalModelOpenaiConfig getOpenaiConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a>

---

##### `palmConfigInput`<sup>Optional</sup> <a name="palmConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.palmConfigInput"></a>

```java
public ModelServingConfigServedEntitiesExternalModelPalmConfig getPalmConfigInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a>

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.providerInput"></a>

```java
public java.lang.String getProviderInput();
```

- *Type:* java.lang.String

---

##### `taskInput`<sup>Optional</sup> <a name="taskInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.taskInput"></a>

```java
public java.lang.String getTaskInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.provider"></a>

```java
public java.lang.String getProvider();
```

- *Type:* java.lang.String

---

##### `task`<sup>Required</sup> <a name="task" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.task"></a>

```java
public java.lang.String getTask();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.internalValue"></a>

```java
public ModelServingConfigServedEntitiesExternalModel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a>

---


### ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference;

new ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resetPalmApiKey">resetPalmApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resetPalmApiKeyPlaintext">resetPalmApiKeyPlaintext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPalmApiKey` <a name="resetPalmApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resetPalmApiKey"></a>

```java
public void resetPalmApiKey()
```

##### `resetPalmApiKeyPlaintext` <a name="resetPalmApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resetPalmApiKeyPlaintext"></a>

```java
public void resetPalmApiKeyPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyInput">palmApiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyPlaintextInput">palmApiKeyPlaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKey">palmApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyPlaintext">palmApiKeyPlaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `palmApiKeyInput`<sup>Optional</sup> <a name="palmApiKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyInput"></a>

```java
public java.lang.String getPalmApiKeyInput();
```

- *Type:* java.lang.String

---

##### `palmApiKeyPlaintextInput`<sup>Optional</sup> <a name="palmApiKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyPlaintextInput"></a>

```java
public java.lang.String getPalmApiKeyPlaintextInput();
```

- *Type:* java.lang.String

---

##### `palmApiKey`<sup>Required</sup> <a name="palmApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKey"></a>

```java
public java.lang.String getPalmApiKey();
```

- *Type:* java.lang.String

---

##### `palmApiKeyPlaintext`<sup>Required</sup> <a name="palmApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyPlaintext"></a>

```java
public java.lang.String getPalmApiKeyPlaintext();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.internalValue"></a>

```java
public ModelServingConfigServedEntitiesExternalModelPalmConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a>

---


### ModelServingConfigServedEntitiesList <a name="ModelServingConfigServedEntitiesList" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesList;

new ModelServingConfigServedEntitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.get"></a>

```java
public ModelServingConfigServedEntitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities">ModelServingConfigServedEntities</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities">ModelServingConfigServedEntities</a>>

---


### ModelServingConfigServedEntitiesOutputReference <a name="ModelServingConfigServedEntitiesOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedEntitiesOutputReference;

new ModelServingConfigServedEntitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.putExternalModel">putExternalModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetEntityName">resetEntityName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetEntityVersion">resetEntityVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetEnvironmentVars">resetEnvironmentVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetExternalModel">resetExternalModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMaxProvisionedConcurrency">resetMaxProvisionedConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMaxProvisionedThroughput">resetMaxProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMinProvisionedConcurrency">resetMinProvisionedConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMinProvisionedThroughput">resetMinProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetProvisionedModelUnits">resetProvisionedModelUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetScaleToZeroEnabled">resetScaleToZeroEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetWorkloadSize">resetWorkloadSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetWorkloadType">resetWorkloadType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalModel` <a name="putExternalModel" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.putExternalModel"></a>

```java
public void putExternalModel(ModelServingConfigServedEntitiesExternalModel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.putExternalModel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a>

---

##### `resetEntityName` <a name="resetEntityName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetEntityName"></a>

```java
public void resetEntityName()
```

##### `resetEntityVersion` <a name="resetEntityVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetEntityVersion"></a>

```java
public void resetEntityVersion()
```

##### `resetEnvironmentVars` <a name="resetEnvironmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetEnvironmentVars"></a>

```java
public void resetEnvironmentVars()
```

##### `resetExternalModel` <a name="resetExternalModel" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetExternalModel"></a>

```java
public void resetExternalModel()
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetInstanceProfileArn"></a>

```java
public void resetInstanceProfileArn()
```

##### `resetMaxProvisionedConcurrency` <a name="resetMaxProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMaxProvisionedConcurrency"></a>

```java
public void resetMaxProvisionedConcurrency()
```

##### `resetMaxProvisionedThroughput` <a name="resetMaxProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMaxProvisionedThroughput"></a>

```java
public void resetMaxProvisionedThroughput()
```

##### `resetMinProvisionedConcurrency` <a name="resetMinProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMinProvisionedConcurrency"></a>

```java
public void resetMinProvisionedConcurrency()
```

##### `resetMinProvisionedThroughput` <a name="resetMinProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMinProvisionedThroughput"></a>

```java
public void resetMinProvisionedThroughput()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetProvisionedModelUnits` <a name="resetProvisionedModelUnits" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetProvisionedModelUnits"></a>

```java
public void resetProvisionedModelUnits()
```

##### `resetScaleToZeroEnabled` <a name="resetScaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetScaleToZeroEnabled"></a>

```java
public void resetScaleToZeroEnabled()
```

##### `resetWorkloadSize` <a name="resetWorkloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetWorkloadSize"></a>

```java
public void resetWorkloadSize()
```

##### `resetWorkloadType` <a name="resetWorkloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetWorkloadType"></a>

```java
public void resetWorkloadType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.externalModel">externalModel</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference">ModelServingConfigServedEntitiesExternalModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityNameInput">entityNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityVersionInput">entityVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.environmentVarsInput">environmentVarsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.externalModelInput">externalModelInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedConcurrencyInput">maxProvisionedConcurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedThroughputInput">maxProvisionedThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedConcurrencyInput">minProvisionedConcurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedThroughputInput">minProvisionedThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.provisionedModelUnitsInput">provisionedModelUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.scaleToZeroEnabledInput">scaleToZeroEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadSizeInput">workloadSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadTypeInput">workloadTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityName">entityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityVersion">entityVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.environmentVars">environmentVars</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedConcurrency">maxProvisionedConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedThroughput">maxProvisionedThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedConcurrency">minProvisionedConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedThroughput">minProvisionedThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.provisionedModelUnits">provisionedModelUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.scaleToZeroEnabled">scaleToZeroEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadSize">workloadSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities">ModelServingConfigServedEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalModel`<sup>Required</sup> <a name="externalModel" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.externalModel"></a>

```java
public ModelServingConfigServedEntitiesExternalModelOutputReference getExternalModel();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference">ModelServingConfigServedEntitiesExternalModelOutputReference</a>

---

##### `entityNameInput`<sup>Optional</sup> <a name="entityNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityNameInput"></a>

```java
public java.lang.String getEntityNameInput();
```

- *Type:* java.lang.String

---

##### `entityVersionInput`<sup>Optional</sup> <a name="entityVersionInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityVersionInput"></a>

```java
public java.lang.String getEntityVersionInput();
```

- *Type:* java.lang.String

---

##### `environmentVarsInput`<sup>Optional</sup> <a name="environmentVarsInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.environmentVarsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVarsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `externalModelInput`<sup>Optional</sup> <a name="externalModelInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.externalModelInput"></a>

```java
public ModelServingConfigServedEntitiesExternalModel getExternalModelInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a>

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.instanceProfileArnInput"></a>

```java
public java.lang.String getInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `maxProvisionedConcurrencyInput`<sup>Optional</sup> <a name="maxProvisionedConcurrencyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedConcurrencyInput"></a>

```java
public java.lang.Number getMaxProvisionedConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `maxProvisionedThroughputInput`<sup>Optional</sup> <a name="maxProvisionedThroughputInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedThroughputInput"></a>

```java
public java.lang.Number getMaxProvisionedThroughputInput();
```

- *Type:* java.lang.Number

---

##### `minProvisionedConcurrencyInput`<sup>Optional</sup> <a name="minProvisionedConcurrencyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedConcurrencyInput"></a>

```java
public java.lang.Number getMinProvisionedConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `minProvisionedThroughputInput`<sup>Optional</sup> <a name="minProvisionedThroughputInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedThroughputInput"></a>

```java
public java.lang.Number getMinProvisionedThroughputInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `provisionedModelUnitsInput`<sup>Optional</sup> <a name="provisionedModelUnitsInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.provisionedModelUnitsInput"></a>

```java
public java.lang.Number getProvisionedModelUnitsInput();
```

- *Type:* java.lang.Number

---

##### `scaleToZeroEnabledInput`<sup>Optional</sup> <a name="scaleToZeroEnabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.scaleToZeroEnabledInput"></a>

```java
public java.lang.Object getScaleToZeroEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `workloadSizeInput`<sup>Optional</sup> <a name="workloadSizeInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadSizeInput"></a>

```java
public java.lang.String getWorkloadSizeInput();
```

- *Type:* java.lang.String

---

##### `workloadTypeInput`<sup>Optional</sup> <a name="workloadTypeInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadTypeInput"></a>

```java
public java.lang.String getWorkloadTypeInput();
```

- *Type:* java.lang.String

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityName"></a>

```java
public java.lang.String getEntityName();
```

- *Type:* java.lang.String

---

##### `entityVersion`<sup>Required</sup> <a name="entityVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityVersion"></a>

```java
public java.lang.String getEntityVersion();
```

- *Type:* java.lang.String

---

##### `environmentVars`<sup>Required</sup> <a name="environmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.environmentVars"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVars();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `maxProvisionedConcurrency`<sup>Required</sup> <a name="maxProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedConcurrency"></a>

```java
public java.lang.Number getMaxProvisionedConcurrency();
```

- *Type:* java.lang.Number

---

##### `maxProvisionedThroughput`<sup>Required</sup> <a name="maxProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedThroughput"></a>

```java
public java.lang.Number getMaxProvisionedThroughput();
```

- *Type:* java.lang.Number

---

##### `minProvisionedConcurrency`<sup>Required</sup> <a name="minProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedConcurrency"></a>

```java
public java.lang.Number getMinProvisionedConcurrency();
```

- *Type:* java.lang.Number

---

##### `minProvisionedThroughput`<sup>Required</sup> <a name="minProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedThroughput"></a>

```java
public java.lang.Number getMinProvisionedThroughput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `provisionedModelUnits`<sup>Required</sup> <a name="provisionedModelUnits" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.provisionedModelUnits"></a>

```java
public java.lang.Number getProvisionedModelUnits();
```

- *Type:* java.lang.Number

---

##### `scaleToZeroEnabled`<sup>Required</sup> <a name="scaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.scaleToZeroEnabled"></a>

```java
public java.lang.Object getScaleToZeroEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `workloadSize`<sup>Required</sup> <a name="workloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadSize"></a>

```java
public java.lang.String getWorkloadSize();
```

- *Type:* java.lang.String

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities">ModelServingConfigServedEntities</a>

---


### ModelServingConfigServedModelsList <a name="ModelServingConfigServedModelsList" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedModelsList;

new ModelServingConfigServedModelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.get"></a>

```java
public ModelServingConfigServedModelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>>

---


### ModelServingConfigServedModelsOutputReference <a name="ModelServingConfigServedModelsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigServedModelsOutputReference;

new ModelServingConfigServedModelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetEnvironmentVars">resetEnvironmentVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMaxProvisionedConcurrency">resetMaxProvisionedConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMaxProvisionedThroughput">resetMaxProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMinProvisionedConcurrency">resetMinProvisionedConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMinProvisionedThroughput">resetMinProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetProvisionedModelUnits">resetProvisionedModelUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetScaleToZeroEnabled">resetScaleToZeroEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetWorkloadSize">resetWorkloadSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetWorkloadType">resetWorkloadType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironmentVars` <a name="resetEnvironmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetEnvironmentVars"></a>

```java
public void resetEnvironmentVars()
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetInstanceProfileArn"></a>

```java
public void resetInstanceProfileArn()
```

##### `resetMaxProvisionedConcurrency` <a name="resetMaxProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMaxProvisionedConcurrency"></a>

```java
public void resetMaxProvisionedConcurrency()
```

##### `resetMaxProvisionedThroughput` <a name="resetMaxProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMaxProvisionedThroughput"></a>

```java
public void resetMaxProvisionedThroughput()
```

##### `resetMinProvisionedConcurrency` <a name="resetMinProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMinProvisionedConcurrency"></a>

```java
public void resetMinProvisionedConcurrency()
```

##### `resetMinProvisionedThroughput` <a name="resetMinProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMinProvisionedThroughput"></a>

```java
public void resetMinProvisionedThroughput()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetProvisionedModelUnits` <a name="resetProvisionedModelUnits" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetProvisionedModelUnits"></a>

```java
public void resetProvisionedModelUnits()
```

##### `resetScaleToZeroEnabled` <a name="resetScaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetScaleToZeroEnabled"></a>

```java
public void resetScaleToZeroEnabled()
```

##### `resetWorkloadSize` <a name="resetWorkloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetWorkloadSize"></a>

```java
public void resetWorkloadSize()
```

##### `resetWorkloadType` <a name="resetWorkloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetWorkloadType"></a>

```java
public void resetWorkloadType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVarsInput">environmentVarsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedConcurrencyInput">maxProvisionedConcurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedThroughputInput">maxProvisionedThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedConcurrencyInput">minProvisionedConcurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedThroughputInput">minProvisionedThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelNameInput">modelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersionInput">modelVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.provisionedModelUnitsInput">provisionedModelUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabledInput">scaleToZeroEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSizeInput">workloadSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadTypeInput">workloadTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVars">environmentVars</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedConcurrency">maxProvisionedConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedThroughput">maxProvisionedThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedConcurrency">minProvisionedConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedThroughput">minProvisionedThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelName">modelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersion">modelVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.provisionedModelUnits">provisionedModelUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabled">scaleToZeroEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSize">workloadSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `environmentVarsInput`<sup>Optional</sup> <a name="environmentVarsInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVarsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVarsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArnInput"></a>

```java
public java.lang.String getInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `maxProvisionedConcurrencyInput`<sup>Optional</sup> <a name="maxProvisionedConcurrencyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedConcurrencyInput"></a>

```java
public java.lang.Number getMaxProvisionedConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `maxProvisionedThroughputInput`<sup>Optional</sup> <a name="maxProvisionedThroughputInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedThroughputInput"></a>

```java
public java.lang.Number getMaxProvisionedThroughputInput();
```

- *Type:* java.lang.Number

---

##### `minProvisionedConcurrencyInput`<sup>Optional</sup> <a name="minProvisionedConcurrencyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedConcurrencyInput"></a>

```java
public java.lang.Number getMinProvisionedConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `minProvisionedThroughputInput`<sup>Optional</sup> <a name="minProvisionedThroughputInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedThroughputInput"></a>

```java
public java.lang.Number getMinProvisionedThroughputInput();
```

- *Type:* java.lang.Number

---

##### `modelNameInput`<sup>Optional</sup> <a name="modelNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelNameInput"></a>

```java
public java.lang.String getModelNameInput();
```

- *Type:* java.lang.String

---

##### `modelVersionInput`<sup>Optional</sup> <a name="modelVersionInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersionInput"></a>

```java
public java.lang.String getModelVersionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `provisionedModelUnitsInput`<sup>Optional</sup> <a name="provisionedModelUnitsInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.provisionedModelUnitsInput"></a>

```java
public java.lang.Number getProvisionedModelUnitsInput();
```

- *Type:* java.lang.Number

---

##### `scaleToZeroEnabledInput`<sup>Optional</sup> <a name="scaleToZeroEnabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabledInput"></a>

```java
public java.lang.Object getScaleToZeroEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `workloadSizeInput`<sup>Optional</sup> <a name="workloadSizeInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSizeInput"></a>

```java
public java.lang.String getWorkloadSizeInput();
```

- *Type:* java.lang.String

---

##### `workloadTypeInput`<sup>Optional</sup> <a name="workloadTypeInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadTypeInput"></a>

```java
public java.lang.String getWorkloadTypeInput();
```

- *Type:* java.lang.String

---

##### `environmentVars`<sup>Required</sup> <a name="environmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVars"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVars();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `maxProvisionedConcurrency`<sup>Required</sup> <a name="maxProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedConcurrency"></a>

```java
public java.lang.Number getMaxProvisionedConcurrency();
```

- *Type:* java.lang.Number

---

##### `maxProvisionedThroughput`<sup>Required</sup> <a name="maxProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedThroughput"></a>

```java
public java.lang.Number getMaxProvisionedThroughput();
```

- *Type:* java.lang.Number

---

##### `minProvisionedConcurrency`<sup>Required</sup> <a name="minProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedConcurrency"></a>

```java
public java.lang.Number getMinProvisionedConcurrency();
```

- *Type:* java.lang.Number

---

##### `minProvisionedThroughput`<sup>Required</sup> <a name="minProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedThroughput"></a>

```java
public java.lang.Number getMinProvisionedThroughput();
```

- *Type:* java.lang.Number

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelName"></a>

```java
public java.lang.String getModelName();
```

- *Type:* java.lang.String

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersion"></a>

```java
public java.lang.String getModelVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `provisionedModelUnits`<sup>Required</sup> <a name="provisionedModelUnits" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.provisionedModelUnits"></a>

```java
public java.lang.Number getProvisionedModelUnits();
```

- *Type:* java.lang.Number

---

##### `scaleToZeroEnabled`<sup>Required</sup> <a name="scaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabled"></a>

```java
public java.lang.Object getScaleToZeroEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `workloadSize`<sup>Required</sup> <a name="workloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSize"></a>

```java
public java.lang.String getWorkloadSize();
```

- *Type:* java.lang.String

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels">ModelServingConfigServedModels</a>

---


### ModelServingConfigTrafficConfigOutputReference <a name="ModelServingConfigTrafficConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigTrafficConfigOutputReference;

new ModelServingConfigTrafficConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.putRoutes">putRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resetRoutes">resetRoutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRoutes` <a name="putRoutes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.putRoutes"></a>

```java
public void putRoutes(IResolvable OR java.util.List<ModelServingConfigTrafficConfigRoutes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.putRoutes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>>

---

##### `resetRoutes` <a name="resetRoutes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resetRoutes"></a>

```java
public void resetRoutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList">ModelServingConfigTrafficConfigRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routesInput">routesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routes"></a>

```java
public ModelServingConfigTrafficConfigRoutesList getRoutes();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList">ModelServingConfigTrafficConfigRoutesList</a>

---

##### `routesInput`<sup>Optional</sup> <a name="routesInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routesInput"></a>

```java
public java.lang.Object getRoutesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.internalValue"></a>

```java
public ModelServingConfigTrafficConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

---


### ModelServingConfigTrafficConfigRoutesList <a name="ModelServingConfigTrafficConfigRoutesList" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigTrafficConfigRoutesList;

new ModelServingConfigTrafficConfigRoutesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.get"></a>

```java
public ModelServingConfigTrafficConfigRoutesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>>

---


### ModelServingConfigTrafficConfigRoutesOutputReference <a name="ModelServingConfigTrafficConfigRoutesOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingConfigTrafficConfigRoutesOutputReference;

new ModelServingConfigTrafficConfigRoutesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resetServedEntityName">resetServedEntityName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resetServedModelName">resetServedModelName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServedEntityName` <a name="resetServedEntityName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resetServedEntityName"></a>

```java
public void resetServedEntityName()
```

##### `resetServedModelName` <a name="resetServedModelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resetServedModelName"></a>

```java
public void resetServedModelName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedEntityNameInput">servedEntityNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelNameInput">servedModelNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentageInput">trafficPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedEntityName">servedEntityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelName">servedModelName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentage">trafficPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `servedEntityNameInput`<sup>Optional</sup> <a name="servedEntityNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedEntityNameInput"></a>

```java
public java.lang.String getServedEntityNameInput();
```

- *Type:* java.lang.String

---

##### `servedModelNameInput`<sup>Optional</sup> <a name="servedModelNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelNameInput"></a>

```java
public java.lang.String getServedModelNameInput();
```

- *Type:* java.lang.String

---

##### `trafficPercentageInput`<sup>Optional</sup> <a name="trafficPercentageInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentageInput"></a>

```java
public java.lang.Number getTrafficPercentageInput();
```

- *Type:* java.lang.Number

---

##### `servedEntityName`<sup>Required</sup> <a name="servedEntityName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedEntityName"></a>

```java
public java.lang.String getServedEntityName();
```

- *Type:* java.lang.String

---

##### `servedModelName`<sup>Required</sup> <a name="servedModelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelName"></a>

```java
public java.lang.String getServedModelName();
```

- *Type:* java.lang.String

---

##### `trafficPercentage`<sup>Required</sup> <a name="trafficPercentage" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentage"></a>

```java
public java.lang.Number getTrafficPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes">ModelServingConfigTrafficConfigRoutes</a>

---


### ModelServingRateLimitsList <a name="ModelServingRateLimitsList" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingRateLimitsList;

new ModelServingRateLimitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.get"></a>

```java
public ModelServingRateLimitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>>

---


### ModelServingRateLimitsOutputReference <a name="ModelServingRateLimitsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingRateLimitsOutputReference;

new ModelServingRateLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resetKey"></a>

```java
public void resetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.callsInput">callsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.renewalPeriodInput">renewalPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.calls">calls</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.renewalPeriod">renewalPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `callsInput`<sup>Optional</sup> <a name="callsInput" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.callsInput"></a>

```java
public java.lang.Number getCallsInput();
```

- *Type:* java.lang.Number

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `renewalPeriodInput`<sup>Optional</sup> <a name="renewalPeriodInput" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.renewalPeriodInput"></a>

```java
public java.lang.String getRenewalPeriodInput();
```

- *Type:* java.lang.String

---

##### `calls`<sup>Required</sup> <a name="calls" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.calls"></a>

```java
public java.lang.Number getCalls();
```

- *Type:* java.lang.Number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.renewalPeriod"></a>

```java
public java.lang.String getRenewalPeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits">ModelServingRateLimits</a>

---


### ModelServingTagsList <a name="ModelServingTagsList" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingTagsList;

new ModelServingTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.get"></a>

```java
public ModelServingTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>>

---


### ModelServingTagsOutputReference <a name="ModelServingTagsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingTagsOutputReference;

new ModelServingTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingTags">ModelServingTags</a>

---


### ModelServingTimeoutsOutputReference <a name="ModelServingTimeoutsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.model_serving.ModelServingTimeoutsOutputReference;

new ModelServingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

---



